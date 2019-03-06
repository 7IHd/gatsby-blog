import React from "react";
import styled from "styled-components";
import { Heading } from "@auth0/cosmos";

const StyledForeground = styled.div`
  background-color: #65737e;
  height: 100vh;
  color: #1b2b34;
`;

const StyledHeading = styled(Heading)`
  font-style: italic;
  color: #d8dee9;
`;

export default class Foreground extends React.Component {
  render() {
    return (
      <StyledForeground>
        <StyledHeading size={1}>Phil Ramirez</StyledHeading>
        <Heading size={2}>Full Stack Software Engineer</Heading>
      </StyledForeground>
    );
  }
}
