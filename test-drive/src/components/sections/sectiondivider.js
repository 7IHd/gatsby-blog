import React from "react";
import styled from "styled-components";

const StyledSectionDivider = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  max-width: 1032px;
  margin: 24px auto;
`;

export default class SectionDivider extends React.Component {
  render() {
    return <StyledSectionDivider />;
  }
}
