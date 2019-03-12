import styled from "styled-components";
import posed from "react-pose";
import { Button } from "@auth0/cosmos";
import { ghostProps } from "./pose";
import { Link } from "gatsby";

const GhostButton = styled(posed.div(ghostProps))``;

const GhostButtonLink = styled(Link)`
  color: ${props => props.theme.color.white.secondary};
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 0.7rem;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color.white.secondary};
`;

const SubmitButton = styled(Button)`
  color: ${props => props.theme.color.white.secondary};
  background-color: ${props => props.theme.color.black.secondary};
`;

export { GhostButton, GhostButtonLink, SubmitButton };
