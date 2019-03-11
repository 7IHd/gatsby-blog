import styled from "styled-components";
import { ParallaxBackgroundImage } from "./parallax";

const ParallaxColor = styled.div`
  background-color: #65737e;
  height: 100vh;
  color: #1b2b34;
`;

const ParallaxImage = styled(ParallaxBackgroundImage)`
  width: 100%;
  height: 100%;
  z-index: 5;
  padding: 0 2rem;
`;

export { ParallaxColor, ParallaxImage };
