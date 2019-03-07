import styled from "styled-components";
import {Heading} from "@auth0/cosmos";

const StyledForeground = styled.div`
  background-color: #65737e;
  height: 100vh;
  color: #1b2b34;
`;

const StyledHeading = styled(Heading)`
  font-style: ${props => props.fontStyle ? props.fontStyle : "normal"};
  color: #d8dee9;
`;

export {
    StyledHeading,
    StyledForeground
};