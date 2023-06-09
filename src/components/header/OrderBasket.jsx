import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent } from "../../assats/icons/Group.svg";
import { useSelector } from "react-redux";

export const OrderBasket = ({ children, onClick }) => {
  const { basketData } = useSelector((state) => state.basket);

  const totalAmount = basketData?.reduce(
    (prev, current) => prev + current.amount,
    0
  );
  return (
    <Button onClick={onClick}>
      <ReactComponent /> <OrderBasketTitle>{children}</OrderBasketTitle>
      <OrderBasketCount>{totalAmount}</OrderBasketCount>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bump 300ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #4d1601;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const OrderBasketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0 24px 0 13px;
`;
const OrderBasketCount = styled.span`
  padding: 4px 13px;
  background: #8a2b06;
  border-radius: 30px;
  color: #fff;
`;
