import React from "react";
import { StyledForeground, StyledHeading } from "../styled-components";

export default class Foreground extends React.Component {
  render() {
    return (
      <StyledForeground>
        <StyledHeading fontStyle="italic" size={1}>
          Phil Ramirez
        </StyledHeading>
        <StyledHeading size={2}>
          Full Stack Software Engineer
        </StyledHeading>
      </StyledForeground>
    );
  }
}
