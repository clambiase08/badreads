import React, {useState} from 'react'
import styled from "styled-components"

export default function AddReviewForm() {
  const initialFormState = {
    review: "",
    tags: "",
    rating: "",
  };
  const [reviewFormData, setReviewFormData] = useState(initialFormState);


  function handleSubmit(e) {
      e.preventDefault();
      console.log(reviewFormData);
      setReviewFormData(initialFormState);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setReviewFormData({...reviewFormData, [name]: value});
  }

  const {review, tags, rating} = reviewFormData;

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
            <StyledInput placeholder='Write your review here' type="text" name="review" value={review} onChange={handleChange}/>
            <StyledLabel>-What made it so bad?-</StyledLabel>
            <StyledInput type="text" name="tags" value={tags} onChange={handleChange} />
            <StyledButton type="submit" disabled={!review}>Submit Review</StyledButton>
        </StyledForm>
    </div>
  )
}

export const StyledForm = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: black;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

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
