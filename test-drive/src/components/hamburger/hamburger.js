import React from "react";
import styled, { keyframes, css } from "styled-components";

const rotateToNinetyAnimation = keyframes`
  from {
    transform: rotate(0deg);
    background-color: #FFF;
  }

  to {
    transform: rotate(90deg);
    background-color: crimson;
  }
`;

const rotateToZeroAnimation = keyframes`
  from {
    transform: rotate(90deg);
    background-color: crimson;
  }

  to {
    transform: rotate(0deg);
    background-color: #FFF;
  }
`;

const animateToNinety = css`
  animation: ${rotateToNinetyAnimation} 0.15s linear;
  transform: rotate(90deg);
`;

const animateToZero = css`
  animation: ${rotateToZeroAnimation} 0.15s linear;
  transform: rotate(0deg);
`;

const Innards = styled.span`
  display: block;
  height: 1px;
  background-color: #fff;
  cursor: pointer;
  margin-top: 8px;
  ${props => (props.isActive ? animateToNinety : animateToZero)}
`;

const Buns = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  right: 5rem;
  top: 3.2rem;
  z-index: 100;
  width: 34px;
  display: block;
  cursor: pointer;
`;

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
    this.click = this.click.bind(this);
  }

  click = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <Buns onClick={this.click}>
        <Innards isActive={this.state.isActive} />
        <Innards isActive={this.state.isActive} />
        <Innards isActive={this.state.isActive} />
      </Buns>
    );
  }
}
