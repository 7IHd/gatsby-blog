import React from "react";
import { SubmitButton } from "./style";

export default class Submit extends React.Component {
  render() {
    const { props } = this;

    return <SubmitButton {...props}>Submit</SubmitButton>;
  }
}

// Source: https://github.com/styled-components/styled-components/issues/1981
