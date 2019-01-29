import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

/*
 * Source: https://codepen.io/pmalexis/pen/omvwEm
 */

const HeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  border: 1px solid #272822;
`;

const HeroH1 = styled.h1`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 15px;

  &:after,
  &:before {
    content: " ";
    position: absolute;
    z-index: -1;
    height: 100px;
    width: 100px;
    transition-duration: 0.7s;
    border: 0 solid #272822;
    opacity: 0.7;
  }

  &:before {
    border-right-width: 10px;
    border-top-width: 10px;
    border-right-color: #000;
    border-top-color: #000;
    right: -35px;
    top: -25px;
  }

  &:after {
    border-bottom-width: 10px;
    border-left-width: 10px;
    bottom: -25px;
    left: -35px;
  }

  &:active:before {
    border-right-width: 1px;
    border-top-width: 1px;
  }

  &:active:after {
    border-bottom-width: 1px;
    border-left-width: 1px;
  }

  &:active:before,
  &:active:after {
    width: 100vw;
    height: 100vh;
    opacity: 1;
  }
`;

const Quadrant1 = styled.div`
  position: absolute;
  border: 1px solid #272822;
  left: 50px;
  top: 50px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  padding: 10px;
`;

const Quadrant2 = styled.div`
  position: absolute;
  border: 1px solid #272822;
  right: 50px;
  top: 50px;
`;

const Quadrant3 = styled.div`
  position: absolute;
  border: 1px solid #272822;
  left: 50px;
  bottom: 50px;
`;

const Quadrant4 = styled.div`
  position: absolute;
  border: 1px solid #272822;
  right: 50px;
  bottom: 50px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

const HeroA = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #9036d4;
  }
`;

const HeroSentence = styled.div`
  font-size: 18px;
  border: 1px solid #272822;
  margin-right: 50px;
`;

const HeroBoldDiv = styled.div`
  border: 1px solid #272822;
  font-weight: bold;
`;

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        site {
          siteMetadata {
            name
          }
        }
      }
    `}
    render={data => (
      <HeroDiv>
        <Quadrant1>
          <HeroSentence>My current title is</HeroSentence>
          <HeroBoldDiv>Full Stack Engineer (Software Engineer)</HeroBoldDiv>
          <HeroSentence>Currently working for</HeroSentence>
          <HeroBoldDiv>Teralogics</HeroBoldDiv>
          <div>You can find my resume here</div>
          <div>
            (which mainly just talks about JavaScript, Linux, Coffee, and
            Running)
          </div>
        </Quadrant1>
        <Quadrant2 />
        <HeroH1>{data.site.siteMetadata.name}</HeroH1>
        <Quadrant3 />
        <Quadrant4>
          <footer>© {new Date().getFullYear()}</footer>
        </Quadrant4>
      </HeroDiv>
    )}
  />
);

export default Hero;
