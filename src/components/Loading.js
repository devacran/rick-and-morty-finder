import React from "react";
import { Container, Img } from "./Loading.styles";
import loading from "../assets/loading.png";
export const Loading = () => {
  return (
    <Container>
      <Img src={loading} />
    </Container>
  );
};
