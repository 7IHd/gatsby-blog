import React from "react";
import { Link } from "gatsby";
import { LogoWrapper, LogoSvg, LogoPath } from "./style";

export default class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <LogoWrapper>
          <LogoSvg xmlns="http://www.w3.org/2000/svg">
            {/* _ */}
            <LogoPath d="M0 17.5H18.2091V21.2595H0V30Z" />
            {/* | */}
            <LogoPath d="M0 29.7176L7.01982 29.7873L7.01897 12.2965L0.00598145 10.3745V24.7176Z" />
            {/* \ */}
            <LogoPath d="M 0.0065918 0 V 12.62637 L 18.8961 20.6297 L 18.5948 18.50316 L 0.0065918 0 Z" />
          </LogoSvg>
        </LogoWrapper>
      </Link>
    );
  }
}
