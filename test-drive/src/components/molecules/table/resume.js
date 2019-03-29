import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ColumnLayout } from "@auth0/cosmos";
import { HeadingColor } from "atoms/heading/style";
import { Resume } from "molecules/table/style";

const _renderCell = (key, content) => {
  console.log("key");
  console.log(key);
  console.log("content");
  console.log(content);
  return content ? <div key={key}>{content}</div> : <div key={key} />;
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

const _renderRows = allTableJson => {
  const rowArray = [];
  allTableJson.edges.map((edge, rowIndex) => {
    rowArray.push(_renderRow(edge.node, rowIndex));
  });
  return rowArray;
};

const ResumeContent = ({ allTableJson }) => {
  console.log(allTableJson);
  return (
    <ColumnLayout gutter="large" distribution="1/3 1/3 1/3">
      {_renderRows(allTableJson)}
    </ColumnLayout>
  );
};

export default class extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query Resume {
            allTableJson {
              edges {
                node {
                  _0
                  _1
                  _2
                }
              }
            }
          }
        `}
        render={data => <StaticQueryResumeTable data={data} {...this.props} />}
      />
    );
  }
}

const StaticQueryResumeTable = ({ data }) => {
  console.log(data);
  return (
    <Resume>
      <ResumeContent {...data} />
    </Resume>
  );
};

export { Resume };

/**
 * Adapted from https://engineering.shopify.com/blogs/engineering/building-data-table-component-react
 */
