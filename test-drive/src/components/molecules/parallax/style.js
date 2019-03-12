import styled from "styled-components";
import { ParallaxBackgroundImage } from "./parallax";

const ParallaxColor = styled.div`
  background-color: ${props => props.theme.color.darkGray.secondary};
  height: 100vh;
  color: ${props => props.theme.color.black.primary};
`;

const ParallaxImage = styled(ParallaxBackgroundImage)`
  width: 100%;
  height: 100%;
  z-index: 5;
  padding: 0 2rem;
`;

export { ParallaxColor, ParallaxImage };
