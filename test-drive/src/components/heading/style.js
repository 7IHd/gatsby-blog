import styled from "styled-components";
import { Heading } from "@auth0/cosmos";

const HeadingColor = styled(Heading)`
  font-style: ${props => (props.fontStyle ? props.fontStyle : "normal")};
  color: #d8dee9;
`;

export { HeadingColor };
