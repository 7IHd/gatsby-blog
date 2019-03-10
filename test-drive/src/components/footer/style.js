import styled from "styled-components";
import { RowLayout } from "@auth0/cosmos";

const Footer = styled.footer`
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

const FooterRow = styled(RowLayout)`
  margin: -70px auto 0px auto;
`;

const Avatar = styled.div`
  margin: -70px 0 15px 0;
`;

const AvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 0;
  display: inline;
`;

export { Footer, FooterRow, Avatar, AvatarImg };
