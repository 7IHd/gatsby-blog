import styled from "styled-components";

const Avatar = styled.div`
  margin: auto;
  z-index: 24;
`;

const AvatarImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin: 0;
  display: inline;
`;

const FooterAvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 0;
  display: inline;
`;

const FooterAvatar = styled.div`
  margin: -70px 0 15px 0;
  z-index: 24;
`;

export { Avatar, AvatarImg, FooterAvatar, FooterAvatarImg };