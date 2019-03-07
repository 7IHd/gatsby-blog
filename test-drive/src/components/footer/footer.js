import React from "react";
import {
  StyledFooter,
  StyledFooterRowLayout,
  StyledAvatar,
  StyledAvatarImg
} from "../styled-components";

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <StyledFooterRowLayout gutter="small">
          <StyledAvatar>
            <StyledAvatarImg
              src="https://avatars2.githubusercontent.com/u/13524654?v=3&s=460"
              alt="avatar"
            />
          </StyledAvatar>
          <p>Full Stack Software Engineer</p>
        </StyledFooterRowLayout>
      </StyledFooter>
    );
  }
}
