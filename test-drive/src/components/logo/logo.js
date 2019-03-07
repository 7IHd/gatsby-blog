import React from "react";
import { Link } from "gatsby";
import {
  StyledLogoWrapper,
  StyledLogoSvg,
  StyledLogoPath
} from "../styled-components";

export default class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <StyledLogoWrapper>
          <StyledLogoSvg xmlns="http://www.w3.org/2000/svg">
            {/* _ */}
            <StyledLogoPath d="M0 17.5H18.2091V21.2595H0V30Z" />
            {/* | */}
            <StyledLogoPath d="M0 29.7176L7.01982 29.7873L7.01897 12.2965L0.00598145 10.3745V24.7176Z" />
            {/* \ */}
            <StyledLogoPath d="M 0.0065918 0 V 12.62637 L 18.8961 20.6297 L 18.5948 18.50316 L 0.0065918 0 Z" />
          </StyledLogoSvg>
        </StyledLogoWrapper>
      </Link>
    );
  }
}
