import styled from "styled-components";
import { Dialog } from "@auth0/cosmos";
import { contactProps } from "./pose";

const Contact = styled(Dialog)`
  height: 100vh;
  
    background-color: ${props => props.theme.color.lightGray.secondary};

  > footer {
    background-color: ${props => props.theme.color.black.primary};
    border-radius: 0px 0px 3px 3px;
  }
`;

export { Contact };
