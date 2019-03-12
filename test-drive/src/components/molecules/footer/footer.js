import React from "react";
import { Footer, FooterRow, Avatar, AvatarImg } from "./style";

export default class extends React.Component {
  render() {
    return (
      <Footer>
        <FooterRow gutter="small">
          <Avatar>
            <AvatarImg
              src="https://avatars2.githubusercontent.com/u/13524654?v=3&s=460"
              alt="avatar"
            />
          </Avatar>
          <p>Full Stack Software Engineer</p>
        </FooterRow>
      </Footer>
    );
  }
}
