import React, { useState } from "react";
import { Icon, Input, Form } from "./SearchBox.styles";
import { useInputValue } from "../hooks/useInputValue";
import { getCharacter } from "../utils/Api";
import { setCharacter, setLoading, setError } from "../actions";

import { connect } from "react-redux";

const SearchBox = (props) => {
  const textInput = useInputValue(); //textInput.value to save value textInput.onChange method to get the input value

  const handleSubmit = async (evn) => {
    evn.preventDefault();
    const character = textInput.value;
    props.setLoading(true);
    try {
      const data = await getCharacter(character);
      props.setCharacter(data.results[0]);
      props.setLoading(false);
      props.setError(false);
    } catch (err) {
      props.setError(true);
      props.setLoading(false);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Busca tu personaje" onChange={textInput.onChange} />
      <Icon />
    </Form>
  );
};

const mapState = (state) => {
  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
  };
};
const mapDispatch = {
  setCharacter,
  setLoading,
  setError,
};
export default connect(mapState, mapDispatch)(SearchBox);
