import React from "react";
import { Heading, ColumnLayout } from "@auth0/cosmos";
import { Table } from "molecules/table/style";

const _renderCell = (key, content) => {
  console.log("key");
  console.log(key);
  console.log("content");
  console.log(content);

  if (!content) {
    return <div key={key} />;
  }

  switch (true) {
    case key === "row_0_cell_0":
      return (
        <Heading key={key} size={2}>
          {content}
        </Heading>
      );
    case key.endsWith(0):
      return (
        <Heading key={key} size={3}>
          {content}
        </Heading>
      );
    case key.endsWith(1):
      return (
        <Heading key={key} size={4}>
          {content}
        </Heading>
      );
    default:
      return <div key={key}>{content}</div>;
  }
};

const _renderRow = (row, rowIndex) => {
  const keys = Object.keys(row);
  console.log("row");
  console.log(row);
  console.log("keys");
  console.log(keys);
  const rowCellArray = [];
  keys.map((key, cellIndex) => {
    rowCellArray.push(
      _renderCell(`row_${rowIndex}_cell_${cellIndex}`, row[key])
    );
  });
  return rowCellArray;
};

const _renderRows = json => {
  const rowArray = [];
  console.log("render rows");
  console.log(json);
  json.edges.map((edge, rowIndex) => {
    rowArray.push(_renderRow(edge.node, rowIndex));
  });
  return rowArray;
};

export default class extends React.Component {
  render() {
    const { json } = this.props;
    console.log(json);
    return (
      <Table>
        <ColumnLayout gutter="large" distribution="1/3 1/3 1/3">
          {_renderRows(json)}
        </ColumnLayout>
      </Table>
    );
  }
}

/**
 * Adapted from https://engineering.shopify.com/blogs/engineering/building-data-table-component-react
 */
