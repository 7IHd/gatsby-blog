import styled from "styled-components";
import posed from "react-pose";
import { ghostProps } from "./pose";
import { Link } from "gatsby";

const GhostButton = styled(posed.div(ghostProps))``;

const GhostButtonLink = styled(Link)`
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

export { GhostButton, GhostButtonLink };
