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
`;

const HeroH1 = styled.h1`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  color: rgba(150, 227, 9);
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
        <HeroH1>

            {data.site.siteMetadata.name}

        </HeroH1>
      </HeroDiv>
    )}
  />
);

export default Hero;
