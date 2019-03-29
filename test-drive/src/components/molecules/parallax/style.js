import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const style = [
  "min-height: 100vh",
  "z-index: 5",
  "padding: 3rem 2rem",
  "overflow: hidden",
  "> ul { margin: 2em auto; }"
];

const ParallaxImage = styled(BackgroundImage)`
  ${style.join("; ")}
`;

const ParallaxColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.theme.color.black.primary};
  ${style.join("; ")}
`;

export { ParallaxColor, ParallaxImage };
