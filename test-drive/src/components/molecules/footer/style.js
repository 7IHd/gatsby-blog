import styled from "styled-components";
import { RowLayout } from "@auth0/cosmos";

const Footer = styled.footer`
  border-top: 1px solid ${props => props.theme.color.darkGray.primary};
  padding: 30px 1em;
  font-size: 14px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
`;

const FooterRow = styled(RowLayout)`
  margin: -70px auto 0px auto;
`;

export { Footer, FooterRow };
