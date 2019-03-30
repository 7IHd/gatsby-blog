import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Table from "molecules/table/table";

export default class extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query Education {
            allEducationJson {
              edges {
                node {
                  _0
                  _1
                }
              }
            }
          }
        `}
        render={data => <StaticQueryEducation data={data} {...this.props} />}
      />
    );
  }
}

const StaticQueryEducation = ({ data }) => {
  console.log(data);
  const json = data.allEducationJson;
  return <Table json={json} />;
};
