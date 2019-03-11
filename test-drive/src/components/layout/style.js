import styled from "styled-components";
import { List, PageLayout, RowLayout, StackLayout } from "@auth0/cosmos";

const Page = styled(PageLayout)`
  overflow-x: hidden;
  background-color: #1b2b34;
  color: #d8dee9;
  font-family: "Roboto Cn", sans-serif;
  font-weight: 400;
`;

const Content = styled(PageLayout.Content)`
  margin: -2.8em auto 0px auto;
  width: 100%;
  background-color: #4f5b66;
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
