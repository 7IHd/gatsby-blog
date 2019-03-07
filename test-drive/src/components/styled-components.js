import styled from "styled-components";
import {
  articleProps,
  navButtonBarProps,
  navButtonProps,
  navItemProps,
  navListProps
} from "./posed-props";
import posed from "react-pose";
import {
  ColumnLayout,
  Heading,
  List,
  PageLayout,
  RowLayout,
  StackLayout
} from "@auth0/cosmos";
import { Link } from "gatsby";
import { ParallaxImage } from "./parallax/parallax";

const StyledPageLayout = styled(PageLayout)`
  overflow-x: hidden;
  background-color: #1b2b34;
  color: #d8dee9;
  font-family: "Roboto Cn", sans-serif;
  font-weight: 400;
`;

const StyledHeadroom_obj = {
  width: "100%",
  margin: "0px auto",
  padding: "0px 2rem",
  paddingTop: "2em",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  zIndex: "20",
  backgroundColor: "#1b2b34"
};

const StyledStackLayout = styled(StackLayout)`
  flex-wrap: nowrap;
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

const StyledContact = styled.span`
  display: flex;
  height: 40px;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Roboto Cn", sans-serif;
  cursor: pointer;
`;

const StyledNavButton = styled(posed.button(navButtonProps))`
  background-color: transparent;
  border-style: none;
  outline: none;
  right: 5rem;
  top: 3.2rem;
  width: 34px;
  display: block;
  cursor: pointer;
`;

const StyledNavButtonBar = styled(posed.span(navButtonBarProps))`
  display: block;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 6px;
`;

const StyledNavLink = styled(Link)`
  display: flex;
  height: 40px;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Roboto Cn", sans-serif;
`;

const StyledNavList = styled(posed.ul(navListProps))`
  list-style: none;
  display: block;
  margin: 0;
`;

const StyledNavItem = styled(posed.li(navItemProps))`
  display: inline-block;
  margin-right: 2em;
`;

const StyledArticle = styled(posed.div(articleProps))``;

const StyledArticleLink = styled(Link)`
  color: #fff;
  text-transform: uppercase;
  font-family: "Roboto Cn", sans-serif;
  font-weight: 900;
  letter-spacing: 4px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 0.7rem;
  padding: 30px 10px;
  border-radius: 10px;
  border: 1px solid #fff;
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

const StyledRowLayout = styled(RowLayout)`
  > div {
    height: 100vh;
  }
  > div {
    > div {
      height: 100%;
    }
  }
`;

const StyledColumnLayout = styled(ColumnLayout)`
  height: 100%;
`;

const StyledParallaxImage = styled(ParallaxImage)`
  width: 100%;
  height: 100%;
  z-index: 5;
  padding: 0 2rem;
`;

const StyledFooter = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  padding: 30px 0;
  font-size: 14px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 1220px;
  width: 100%;
`;

const StyledAvatar = styled.div`
  margin: -70px 0 15px 0;
`;

const StyledAvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 0;
  display: inline;
`;

const StyledFooterRowLayout = styled(RowLayout)`
  margin: -70px auto 0px auto;
`;

const StyledLogoWrapper = styled.div`
  height: 30px;
  width: 23px;
`;

const StyledLogoSvg = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;
`;

// Read more: https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
const StyledLogoPath = styled.path`
  stroke: #1b2b34;
  stroke-width: 1px;
  fill: #d8dee9;
`;

export {
  StyledHeadroom_obj,
  StyledPageLayout,
  StyledStackLayout,
  StyledParallax,
  StyledHeading,
  StyledArticle,
  StyledArticleLink,
  StyledList,
  StyledContent,
  StyledRowLayout,
  StyledColumnLayout,
  StyledParallaxImage,
  StyledFooter,
  StyledAvatar,
  StyledAvatarImg,
  StyledFooterRowLayout,
  StyledNavLink,
  StyledContact,
  StyledNavList,
  StyledNavItem,
  StyledNavButton,
  StyledNavButtonBar,
  StyledLogoWrapper,
  StyledLogoSvg,
  StyledLogoPath
};
