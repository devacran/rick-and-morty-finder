import React from "react";
import { Container, Img, Text } from "./Error.styles";
import error from "../assets/notfound.png";
export const Error = () => {
  return (
    <Container>
      <Text>Intenta con otro</Text>
      <Img src={error} />
    </Container>
  );
};
