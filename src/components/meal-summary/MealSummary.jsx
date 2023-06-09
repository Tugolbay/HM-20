import React from "react";
import styled from "styled-components";
import SummaryImage from "../../assats/img/pexels-alexy-almond-3756523 1.png";
import { MealSummaryCart } from "./MealSummaryCart";

export const MealSummary = () => {
  return (
    <Container>
      <Image src={SummaryImage} alt="almond" />
      <MealSummaryCart />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 432px;
`;
