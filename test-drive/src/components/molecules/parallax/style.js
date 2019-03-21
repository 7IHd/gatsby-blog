import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const style = [
  "min-height: 100vh",
  "z-index: 5",
  "padding: 0 2rem",
  "overflow: hidden",
  "> ul { margin: 2em auto; }"
];

const ParallaxImage = styled(BackgroundImage)`
  ${style.join("; ")}
`;

const ParallaxColor = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.theme.color.black.primary};
  ${style.join("; ")}
`;

export { ParallaxColor, ParallaxImage };
