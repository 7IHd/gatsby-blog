import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const HeroDiv = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
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
    render={data => <HeroDiv>{data.site.siteMetadata.name}</HeroDiv>}
  />
);

export default Hero;
