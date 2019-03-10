import styled from "styled-components";
import { Heading, List, PageLayout } from "@auth0/cosmos";
import { ParallaxImage } from "./parallax/parallax";

const StyledPageLayout = styled(PageLayout)`
  overflow-x: hidden;
  background-color: #1b2b34;
  color: #d8dee9;
  font-family: "Roboto Cn", sans-serif;
  font-weight: 400;
`;

const StyledParallax = styled.div`
  background-color: #65737e;
  height: 100vh;
  color: #1b2b34;
`;

const StyledHeading = styled(Heading)`
  font-style: ${props => (props.fontStyle ? props.fontStyle : "normal")};
  color: #d8dee9;
`;

const StyledList = styled(List)`
  background-color: transparent;

  > li {
    border-top: 0px;
  }

  > li:hover {
    background-color: transparent;
  }
`;

const StyledContent = styled(PageLayout.Content)`
  margin: -2.8em auto 0px auto;
  width: 100%;
  background-color: #4f5b66;
`;

const StyledParallaxImage = styled(ParallaxImage)`
  width: 100%;
  height: 100%;
  z-index: 5;
  padding: 0 2rem;
`;

export {
  StyledPageLayout,
  StyledParallax,
  StyledHeading,
  StyledList,
  StyledContent,
  StyledParallaxImage
};
