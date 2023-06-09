import React, { useEffect } from "react";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basket";

export const Basket = ({ onToggle }) => {
  const { basketData } = useSelector((state) => state.basket);
  console.log(basketData);

  const totalPrice = basketData?.reduce(
    (prev, current) => prev + current.amount * current.price,
    0
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  return (
    <Modal>
      {basketData.length ? (
        <FixedWidthContainer>
          {basketData?.map((item) => {
            if (item.amount > 0) {
              return (
                <BasketItem
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                  id={item.id}
                />
              );
            }
            return null;
          })}
        </FixedWidthContainer>
      ) : null}
      <TotalAmount onClose={onToggle} totalPrice={totalPrice} />
    </Modal>
  );
};

const FixedWidthContainer = styled.div`
  max-height: 260px;
  overflow-y: scroll;
`;
