import React from "react";
import { Icon, Stack } from "@auth0/cosmos";
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
          <Stack align="fill" alignVertical="center" widths={[75, 25]}>
            <Stack align="left" alignVertical="center">
              <span>Full Stack Developer </span>
            </Stack>
            <Stack align="fill" alignVertical="center">
              <span>
                <Icon name="mail" size="20" color="white" />
              </span>
              <span>
                <Icon name="brand-github" size="20" color="white" />
              </span>
              <span>
                <Icon name="brand-linkedin" size="20" color="white" />
              </span>
            </Stack>
          </Stack>
        </FooterRow>
      </Footer>
    );
  }
}
