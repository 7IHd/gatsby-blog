import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ColumnLayout } from "@auth0/cosmos";
import { HeadingColor } from "atoms/heading/style";

function _buildMiddleContent(data) {
  const middleContentArray = [];

  data.allTableJson.edges.forEach(edge =>
    edge.node.resume.experience.forEach(element => {
      middleContentArray.push(
        <div key={element.id + "_middle"}>
          <HeadingColor size={2} font-style="bold">
            {element.title}
          </HeadingColor>
          <HeadingColor size={4} font-style="bold">
            {element.company}
          </HeadingColor>
          <HeadingColor size={4} font-style="bold">
            {element.description}
          </HeadingColor>
        </div>
      );
    })
  );

  return middleContentArray;
}
function _buildRightContent(data) {
  const rightContentArray = [];

  data.allTableJson.edges.forEach(edge =>
    edge.node.resume.experience.forEach(element => {
      rightContentArray.push(
          <div>
        <HeadingColor key={element.id + "_right"} size={4} font-style="bold">
          {element.date}
        </HeadingColor>
          </div>
      );
    })
  );

  return rightContentArray;
}

export default class Resume extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query Resume {
            allTableJson {
              edges {
                node {
                  resume {
                    experience {
                      id
                      title
                      company
                      description
                      date
                    }
                    education {
                      college
                      degree
                      date
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => <StaticQueryResumeTable data={data} />}
      />
    );
  }
}

const StaticQueryResumeTable = ({ data }) => {
  return (
    <ColumnLayout gutter="small" distribution="1/3 1/3 1/3">
      <HeadingColor size={3} font-style="bold">
        Work Experience
      </HeadingColor>
      <div />
      <div />
      <div />
      {_buildMiddleContent(data)}
      {_buildRightContent(data)}
    </ColumnLayout>
  );
};

export { Resume };
