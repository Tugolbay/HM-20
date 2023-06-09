import React from "react";
import styled from "styled-components";
import { OrderBasket } from "./OrderBasket";

export const Header = ({ onToggle }) => {
  return (
    <header>
      <Container>
        <Title>ReactMeals</Title>
        <OrderBasket onClick={onToggle}>Your Cart</OrderBasket>
      </Container>
    </header>
  );
};

const Container = styled.div`
  width: 100%;
  height: 101px;
  background: #8a2b06;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
`;
