import styled from "styled-components";
import {
  List,
  PageLayout,
  RowLayout,
  StackLayout,
  GalleryLayout,
  Paragraph
} from "@auth0/cosmos";

const Page = styled.div`
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
  height: 100%;
`;

const Gallery = styled(GalleryLayout)`
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
`;

export { Page, Content, Stack, Row, ListColor, Card, Gallery };
