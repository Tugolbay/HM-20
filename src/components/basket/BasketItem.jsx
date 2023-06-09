import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addQuantity, minusQuantity } from "../../store/basket";

export const BasketItem = ({ title, price, amount, id }) => {
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch(addQuantity(id, amount));
  };
  const Decrement = () => {
    dispatch(minusQuantity(id, amount - 1));
  };

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        <InformationBlock>
          <p>${price}</p>
          <span>x {amount}</span>
        </InformationBlock>
        <ButtonBlock>
          <ButtonMinus onClick={Decrement}>-</ButtonMinus>
          <ButtonPlus onClick={Increment}>+</ButtonPlus>
        </ButtonBlock>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 24px 0;
  border-bottom: 2px solid #d6d6d6;

  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #222222;
    margin-bottom: 12px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBlock = styled.aside`
  display: flex;
  gap: 15px;
`;

const InformationBlock = styled.article`
  display: flex;
  align-items: center;
  width: 155px;
  justify-content: space-between;

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #ad5502;
  }
  span {
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    padding: 6px 14px;
  }
`;

const ButtonPlus = styled.button`
  width: 48px;
  height: 36px;
  border: 1px solid #8a2b06;
  border-radius: 6px;
  background-color: #fff;
  color: #8a2b06;
  &:hover {
    background: #8a2b06;
  }
  &:active {
    background: #993108;
  }
`;
const ButtonMinus = styled.button`
  width: 48px;
  height: 36px;
  border: 1px solid #8a2b06;
  border-radius: 6px;
  background-color: #fff;
  color: #8a2b06;
  &:hover {
    background: #8a2b06;
    color: #fff;
  }
  &:active {
    background: #993108;
    color: #fff;
  }
`;
