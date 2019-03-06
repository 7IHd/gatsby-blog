import React from "react";
import styled from "styled-components";

const StyledForeground = styled.div`
  background-color: #65737e;
  height: 100vh;
  color: #1b2b34;
`;

export default class Foreground extends React.Component {
  render() {
    return <StyledForeground>Get in touch -></StyledForeground>;
  }
}
