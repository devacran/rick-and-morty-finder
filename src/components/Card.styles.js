import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 530px;
  width: 360px;
  padding: 15px;
  background-color: gray;
  border-radius: 18px;
`;
export const Info = styled.div`
  position: absolute;
  height: 230px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 15px;
  padding: 0 10px;
  background-color: yellow;
  border-radius: 18px;
`;
export const Label = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 38px;
  margin: 15px 0;
  padding: 0 10px;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  background-color: gray;
  border-radius: 18px;
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  background-color: #e5eff2;
  clip-path: ellipse(50% 50% at 50% 50%);
`;
export const Image = styled.img`
  width: 100%;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  margin-top: 15px;
  margin-bottom: 30px;
  text-transform: uppercase;
`;
