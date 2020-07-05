import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import SearchBox from "../components/SearchBox";
import Card from "../components/Card";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { Container } from "./Search.styles";
class Search extends Component {
  render() {
    return (
      <Container>
        <SearchBox />
        <Card />
        {this.props.loading ? <Loading /> : null}
        {this.props.error ? <Error /> : null}
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};
export default connect(mapState, null)(Search);
