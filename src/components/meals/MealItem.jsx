import React from "react";
import { styled } from "styled-components";
import { MealItemForm } from "./MealItemForm";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../store/basket";

export const MealItem = ({ meal }) => {
  const dispatch = useDispatch();
  function addItem(amount) {
    const data = {
      amount: +amount,
      id: meal._id,
    };
    dispatch(addToBasket(data));
  }
  return (
    <Container>
      <StyledMealItem>
        <h4>{meal.title}</h4>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </StyledMealItem>
      <section>
        <MealItemForm onAdd={addItem} inputId={meal.id} />
      </section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border-bottom: 2px solid #d6d6d6;
  justify-content: space-between;
  padding-top: 24px;
`;

const StyledMealItem = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
  }
  p {
    width: 700px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }
`;
