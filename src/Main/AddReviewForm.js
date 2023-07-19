import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Checkbox, Group, GroupLabel, useCheckboxStore } from "@ariakit/react";
import { FaPoop } from "react-icons/fa";
import { AppContext } from "../context/ContextProvider";

export default function AddReviewForm({ image }) {
  const initialFormState = {
    review: "",
    tags: [],
    rating: null,
    image: image,
  };
  const [reviewFormData, setReviewFormData] = useState(initialFormState);
  const [hover, setHover] = useState(null);
  const { addReview } = useContext(AppContext);

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
      .then((reviewFormData) => addReview(reviewFormData));
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
    <StyledContainer>
      <StyledImage src={image} alt="Product" />

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
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  background-color: #fcf5ea;
  margin: 50px;
`;

const StyledImage = styled.img`
  padding: 5px;
  width: 250px; 
  height: 325px;
  margin-bottom: 100px;
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  flex-grow: 0.2;
`;

const StyledInput = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  box-shadow: 0px 1px 0px 0px black;
  background: linear-gradient(to bottom, black 5%, gray 100%);
  background-color: black;
  border-radius: 15px;
  border-radius: 15px;
  box-sizing: border-box;
  color: #fcf5ea;
  text-shadow: 0px 1px 0px #fcf5ea;
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
    background: linear-gradient(to bottom, #fcf5ea 5%, #fcf5ea 100%);
    background-color: #fcf5ea;
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
  padding: 5px; /* Add padding to create space between icons */
  display: inline-flex; /* Change display to inline-flex */
  align-items: center; /* Align icons vertically */
  margin: 15px; /* Add margin to create space between icons */

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
