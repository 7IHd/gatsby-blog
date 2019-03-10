import styled from "styled-components";
import { ColumnLayout, RowLayout, StackLayout } from "@auth0/cosmos";

const Stack = styled(StackLayout)`
  flex-wrap: nowrap;
`;

const Column = styled(ColumnLayout)``;

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

export { Stack, Column, Row };
