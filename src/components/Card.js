import React from "react";
import { connect } from "react-redux";
import {
  Container,
  ImageContainer,
  Image,
  Info,
  Label,
  Title,
} from "./Card.styles";

const Card = (props) => {
  const { character } = props;
  const { name, status, species, location, image } = character;
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Info>
        <Title>{name ? name : "Nombre"}</Title>
        <Label>{status ? status : "Estado"}</Label>
        <Label>{species ? species : "Especie"}</Label>
        <Label>{location ? location.name : "Ubicacion"}</Label>
      </Info>
    </Container>
  );
};

const mapState = (state) => ({
  character: state.character,
});
export default connect(mapState, null)(Card);
