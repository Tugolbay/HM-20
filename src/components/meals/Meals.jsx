import React, { useEffect } from "react";
import styled from "styled-components";
import { MealItem } from "./MealItem";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../../store/meals";

export const Meals = () => {
  const { mealsData } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);
  return (
    <Container>
      {mealsData.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
  margin-top: 135px;
`;
