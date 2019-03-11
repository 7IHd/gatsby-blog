import styled from "styled-components";
import { List, PageLayout, RowLayout, StackLayout } from "@auth0/cosmos";

const Page = styled(PageLayout)`
  overflow-x: hidden;
  background-color: ${props => props.theme.color.black.primary};
  color: ${props => props.theme.color.white.secondary};
  font-family: "Roboto Cn", sans-serif;
  font-weight: 400;
`;

const Content = styled(PageLayout.Content)`
  margin: -2.8em auto 0px auto;
  width: 100%;
  background-color: ${props => props.theme.color.darkGray.primary};
`;

const Stack = styled(StackLayout)`
  flex-wrap: nowrap;
`;

const Row = styled(RowLayout)`
  > div {
    height: 100vh;
  }
  > div {
    > div {
      height: 100%;
    }
  }
`;

const ListColor = styled(List)`
  background-color: transparent;

  > li {
    border-top: 0px;
  }

  > li:hover {
    background-color: transparent;
  }
`;

export { Page, Content, Stack, Row, ListColor };
