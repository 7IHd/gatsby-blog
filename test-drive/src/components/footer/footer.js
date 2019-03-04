import React from "react";
import { RowLayout } from "@auth0/cosmos";
import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.90);
  padding: 30px 0;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 1220px;
  width: 100%;
`;

const Avatar = styled.div`
  margin: -70px 0 15px 0;
`;

const StyledImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 0;
  display: inline;
`;

const StyledRowLayout = styled(RowLayout)`
  margin: 0px auto;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <StyledRowLayout gutter="small">
          <Avatar>
            <StyledImg
              src="https://avatars2.githubusercontent.com/u/13524654?v=3&s=460"
              alt="avatar"
            />
          </Avatar>
          <p>Text, text, text, text</p>
        </StyledRowLayout>
      </StyledFooter>
    );
  }
}
