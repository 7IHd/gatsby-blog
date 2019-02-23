import React from "react";
import styled, { keyframes } from "styled-components";

const Buns = styled.div`
  position: absolute;
  right: 5rem;
  top: 3.2rem;
  z-index: 100;
  width: 34px;
  display: block;
  cursor: pointer;
`;

const animateLettuce = keyframes`
0% { background-color: #FFF }
50% { 
transform: translateY(9px);
 background-color: #FFF}
80% {
transfrom: translateY(5px);
 background-color: #FFF}
100% { 
transform: translateY(0);
background-color: crimson
}
`;

const Lettuce = styled.span`
  display: block;
  height: 1px;
  background-color: #fff;
  cursor: pointer;
  margin-top: 8px;
  animation: ${animateLettuce} 0.6s linear 1 both;
`;

export default class Hamburger extends React.Component {
  render() {
    return (
      <Buns>
        <Lettuce />
      </Buns>
    );
  }
}
