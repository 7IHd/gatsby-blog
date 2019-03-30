import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Table from "molecules/table/table";

export default class extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query Experience {
            allExperienceJson {
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
        render={data => <StaticQueryExperience data={data} {...this.props} />}
      />
    );
  }
}

const StaticQueryExperience = ({ data }) => {
  console.log(data);
  const json = data.allExperienceJson;
  return <Table json={json} />;
};
