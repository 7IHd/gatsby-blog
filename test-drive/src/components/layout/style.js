import styled from "styled-components";
import {
  List,
  PageLayout,
  RowLayout,
  StackLayout,
  Paragraph
} from "@auth0/cosmos";

const Page = styled(PageLayout)`
  overflow-x: hidden;
  background-color: ${props => props.theme.color.black.primary};
  color: ${props => props.theme.color.white.secondary};
`;

const Content = styled(PageLayout.Content)`
  margin-top: -2.8em;
  width: 100%;
  background-color: ${props => props.theme.color.darkGray.primary};
`;

const Stack = styled(StackLayout)`
  flex-wrap: nowrap;
  height: 100%;
`;

const Row = styled(RowLayout)`
  height: 100vh;
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

const Card = styled.div`
  background-color: ${props => props.theme.color.darkGray.secondary};
  color: ${props => props.theme.color.white.secondary};
  padding: 2em;
  border-radius: 10px;
`;

export { Page, Content, Stack, Row, ListColor, Card };
