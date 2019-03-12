import styled from "styled-components";

const LogoWrapper = styled.div`
  height: 30px;
  width: 23px;
`;

const LogoSvg = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;
`;

// Read more: https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
const LogoPath = styled.path`
  stroke: ${props => props.theme.color.black.primary};
  stroke-width: 1px;
  fill: ${props => props.theme.color.white.secondary};
`;

export { LogoWrapper, LogoSvg, LogoPath };
