import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        softwareDesignImage: file(relativePath: { eq: "satellite.jpg" }) {
          childImageSharp {
            fluid(duotone: { highlight: "#343D46", shadow: "#192550", opacity: 40 }, maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.softwareDesignImage.childImageSharp.fluid;
      return (
        <BackgroundImage
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export default StyledBackgroundSection;

// Sources:
// - https://github.com/gatsbyjs/gatsby/issues/2470
// - https://using-gatsby-image.gatsbyjs.org/prefer-webp/
// - https://github.com/bfred-it/object-fit-images
