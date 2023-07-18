import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox, Group, GroupLabel, useCheckboxStore } from "@ariakit/react";
import { FaPoop } from "react-icons/fa";

export default function AddReviewForm({ onAddReview, image }) {
  const initialFormState = {
    review: "",
    tags: [],
    rating: null,
    image: image,
  };
  const [reviewFormData, setReviewFormData] = useState(initialFormState);
  const [hover, setHover] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(reviewFormData);
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewFormData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((reviewFormData) => onAddReview(reviewFormData));
    setReviewFormData(initialFormState);
  }

  function handleChange(e) {
    const { name, type, checked, value } = e.target;

    if (type === "checkbox") {
      const tags = [...reviewFormData.tags];

      if (checked) {
        tags.push(name);
      } else {
        const index = tags.indexOf(name);
        if (index > -1) {
          tags.splice(index, 1);
        }
      }

      setReviewFormData({ ...reviewFormData, tags });
    } else if (type === "radio") {
      setReviewFormData({ ...reviewFormData, [name]: parseInt(value, 10) });
    } else {
      setReviewFormData({ ...reviewFormData, [name]: value });
    }
  }

  const { review, tags, rating } = reviewFormData;
  const checkbox = useCheckboxStore({ defaultValue: tags });

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Write your review here"
          type="text"
          name="review"
          value={review}
          onChange={handleChange}
        />
        <Group className="wrapper">
          <GroupLabel>-What made it so bad?-</GroupLabel>
          <label className="label">
            <Checkbox
              store={checkbox}
              checked={tags.includes("bad writing")}
              name="bad writing"
              className="checkbox"
              onChange={handleChange}
            />
            bad writing
          </label>
          <label className="label">
            <Checkbox
              store={checkbox}
              checked={tags.includes("main character gave me the ick")}
              name="main character gave me the ick"
              className="checkbox"
              onChange={handleChange}
            />
            main character gave me the ick
          </label>
          <label className="label">
            <Checkbox
              store={checkbox}
              checked={tags.includes("boring")}
              name="boring"
              className="checkbox"
              onChange={handleChange}
            />
            boring
          </label>
        </Group>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <Label key={index}>
                <Input
                  type="radio"
                  name="rating"
                  checked={index === rating}
                  value={index}
                  onChange={handleChange}
                />
                <FaPoop
                  size={25}
                  className={index <= (hover || rating) ? "on" : "off"}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                />
              </Label>
            );
          })}
        </div>
        <StyledButton type="submit" disabled={!review}>
          Submit Review
        </StyledButton>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: black;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background-color: #ffffff;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const Label = styled.label`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  .on {
    color: #81665c;
  }
  .off {
    color: #ccc;
  }
`;

const Input = styled.input`
  display: none;
`;
