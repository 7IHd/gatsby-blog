import styled from "styled-components";
import posed from "react-pose";
import {
  navButtonBarProps,
  navButtonProps,
  navItemProps,
  navListProps
} from "./pose";
import { Link } from "gatsby";

const NavButton = styled(posed.button(navButtonProps))`
  background-color: transparent;
  border-style: none;
  outline: none;
  right: 5rem;
  top: 3.2rem;
  width: 34px;
  display: block;
  cursor: pointer;
`;

const NavButtonBar = styled(posed.span(navButtonBarProps))`
  display: block;
  background-color: ${props => props.theme.color.white.secondary};
  cursor: pointer;
  margin-bottom: 6px;
`;

const NavLink = styled(Link)`
  display: flex;
  height: 40px;
  color: ${props => props.theme.color.white.secondary};
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
`;

const NavList = styled(posed.ul(navListProps))`
  list-style: none;
  display: block;
  margin: 0;
`;

const NavItem = styled(posed.li(navItemProps))`
  display: inline-block;
  margin-right: 2em;
`;

const ContactLink = styled.span`
  display: flex;
  height: 40px;
  color: ${props => props.theme.color.white.secondary};
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;

export { NavList, NavItem, NavLink, NavButton, NavButtonBar, ContactLink };
