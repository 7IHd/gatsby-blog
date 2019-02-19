import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const InfoCardWrapper = styled.div`
  margin: 5px;
  padding: 0px;
`;

const InfoCardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  background: hsl(65, 8%, 26%);
  box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
  border-radius: 10px;
`;

const InfoCardSpan = styled.span`
  font-weight: bold;
`;

const InfoCard = () => (
  <StaticQuery
    query={graphql`
      query InfoCardQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <InfoCardWrapper>
        <InfoCardDiv>
          <InfoCardSpan>{data.site.siteMetadata.title}</InfoCardSpan>
        </InfoCardDiv>
      </InfoCardWrapper>
    )}
  />
);

export default InfoCard;
