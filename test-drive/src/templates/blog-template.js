import React from "react";
import { graphql } from "gatsby";

function BlogTemplate(props) {
  console.log('s');
  return <div>Blog</div>;
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default BlogTemplate;