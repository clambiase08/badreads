import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FaPoop } from "react-icons/fa";
import { AppContext } from "../context/ContextProvider";
import { Group, GroupLabel, Checkbox, useCheckboxStore } from "@ariakit/react";

export default function AddReviewForm({ image, title }) {
  const initialFormState = {
    review: "",
    tags: [],
    rating: null,
    image: image,
    title: title,
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
        <h1>Add a Review</h1>
        <StyledInputWrapper>
          {!review && <PlaceholderText>Write your review here</PlaceholderText>}
          <StyledInput
            type="text"
            name="review"
            value={review}
            onChange={handleChange}
          />
        </StyledInputWrapper>
        <Group className="wrapper">
          <GroupLabel>-What made it so bad?-</GroupLabel>
          <CheckboxRow>
            <StyledCheckbox
            store={checkbox}
              checked={tags.includes("bad writing")}
              name="bad writing"
              className="checkbox"
              onChange={handleChange}
            />
            <CheckboxLabel>bad writing</CheckboxLabel>
            <StyledCheckbox
            store={checkbox}
              checked={tags.includes("main character gave me the ick")}
              name="main character gave me the ick"
              className="checkbox"
              onChange={handleChange}
            />

            <CheckboxLabel>main character gave me the ick</CheckboxLabel>
            <StyledCheckbox
            store={checkbox}
              checked={tags.includes("boring")}
              name="boring"
              className="checkbox"
              onChange={handleChange}
            />

            <CheckboxLabel>boring</CheckboxLabel>
          </CheckboxRow>
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
  background-color: #f4edf5;
  margin: 50px;
`;

const StyledImage = styled.img`
  padding-right: 50px;
  width: 400px;
  height: 500px;
  margin-bottom: 100px;
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 25px;
  flex-grow: 0.2;
  align-content: center;
  text-align: center;
  min-height: 440px;
  max-width: 400px;
  margin-bottom: 100px;

  > .wrapper {
    padding: 20px;
  }

  > h1 {
    font-size: 40px;
    font-weight: 500;
  }
`;

const StyledInputWrapper = styled.div`
  position: relative;
  margin: 20px 5px 30px;
`;

const StyledInput = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* text-align: center; */
`;

const PlaceholderText = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  pointer-events: none;
`;

// const StyledButton = styled.button`
//   box-shadow: 0px 1px 0px 0px black;
//   background: linear-gradient(to bottom, black 5%, gray 100%);
//   background-color: black;
//   border-radius: 15px;
//   box-sizing: border-box;
//   color: #fcf5ea;
//   text-shadow: 0px 1px 0px #fcf5ea;
//   cursor: pointer;
//   display: inline-block;
//   font-size: 16px;
//   line-height: normal;
//   margin: 0;
//   min-height: 60px;
//   min-width: 0;
//   outline: none;
//   padding: 16px 24px;
//   text-align: center;
//   text-decoration: none;
//   transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 100%;
//   will-change: transform;

//   &:disabled {
//     pointer-events: none;
//   }
//   &:hover {
//     background: linear-gradient(to bottom, #fcf5ea 5%, #fcf5ea 100%);
//     background-color: #fcf5ea;
//     box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
//   }
//   &:active {
//     box-shadow: none;
//     transform: translateY(0);
//   }
// `;

const Label = styled.label`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 20px 5px 60px;
  display: inline-flex;
  align-items: center;
  margin: 5px;

  .on {
    color: #81665c;
  }
  .off {
    color: #ccc;
  }
`;

const CheckboxRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 20px; /* Add spacing between the checkboxes */
`;

const CheckboxLabel = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 12px;
`;

const StyledCheckbox = styled(Checkbox)`
  display: inline-block;
`;

const Input = styled.input`
  display: none;
`;

const StyledButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 25px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
`;


