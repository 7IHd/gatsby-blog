import React from "react";
import { graphql } from "gatsby";
import SEO from "core/seo";
import Layout from "layout/layout";
import { Content, ListColor, Card, Stack } from "layout/style";
import { Gallery } from "layout/style";
import { Parallax } from "molecules/parallax/parallax";
import Resume from "molecules/table/resume";
import Header from "molecules/header/header";
import Footer from "molecules/footer/footer";
import { HeadingColor } from "atoms/heading/style";
import { Heading } from "@auth0/cosmos";
import { Avatar, AvatarImg } from "atoms/avatar/avatar";

import * as R from "ramda";

const _getHtml = function(edge) {
  const { html } = edge.node;
  return html;
};

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  console.log(edges);
  const extractedHtml = R.map(_getHtml, edges);

  console.log(extractedHtml);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <Parallax className="firstOne">
        {/*The size property needs to be media dependent*/}
        <Gallery gutter="large" size="medium">
          <Card className="leftHeroCard" initialPose="exit" pose="enter">
            <Avatar>
              <AvatarImg
                  src="https://avatars2.githubusercontent.com/u/13524654?v=3&s=460"
                  alt="avatar"
              />
            </Avatar>
            <Heading size={2}>Phil Ramirez</Heading>
            <Heading size={3}>Full Stack Developer</Heading>
          </Card>
        </Gallery>
      </Parallax>
      <Parallax
        className="secondOne"
        backgroundColor={props => props.theme.color.darkGray.primary}
      >
        <Resume />
      </Parallax>
      <Parallax className="thirdOne" backgroundColor="#1B2B34">
        <svg
          height="600"
          version="1.1"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="600"
            fill="url('#Sjtuyg8in2')"
          />
          <circle cx="224" cy="102" r="1.1374356352973283" fill="#ffffff" />
          <circle cx="231" cy="64" r="1.4447586408229236" fill="#ffffff" />
          <circle cx="397" cy="115" r="0.3265183632713289" fill="#ffffff" />
          <circle cx="395" cy="32" r="1.2727665441650067" fill="#ffffff" />
          <circle cx="412" cy="64" r="0.361279757519151" fill="#ffffff" />
          <circle cx="347" cy="175" r="1.4596650415258199" fill="#ffffff" />
          <circle cx="305" cy="92" r="0.6088935315826232" fill="#ffffff" />
          <circle cx="440" cy="111" r="1.4650650891119876" fill="#ffffff" />
          <circle cx="319" cy="103" r="0.3483637376284474" fill="#ffffff" />
          <circle cx="80" cy="34" r="1.2689822022580821" fill="#ffffff" />
          <circle cx="400" cy="77" r="1.1792500428002173" fill="#ffffff" />
          <circle cx="171" cy="87" r="1.390659118676718" fill="#ffffff" />
          <circle cx="522" cy="83" r="0.8069758758899055" fill="#ffffff" />
          <circle cx="62" cy="77" r="0.8543826065842322" fill="#ffffff" />
          <circle cx="82" cy="67" r="0.7272547199373085" fill="#ffffff" />
          <circle cx="449" cy="178" r="0.9571469803812751" fill="#ffffff" />
          <circle cx="22" cy="34" r="0.1300815943743444" fill="#ffffff" />
          <circle cx="153" cy="104" r="1.1385543644335012" fill="#ffffff" />
          <circle cx="327" cy="122" r="0.5788763624502733" fill="#ffffff" />
          <circle cx="114" cy="138" r="1.4155950665296884" fill="#ffffff" />
          <circle cx="456" cy="58" r="1.4699819729970032" fill="#ffffff" />
          <circle cx="171" cy="42" r="0.6876450915447593" fill="#ffffff" />
          <circle cx="390" cy="73" r="1.104400685863021" fill="#ffffff" />
          <circle cx="373" cy="30" r="0.9529661869981578" fill="#ffffff" />
          <circle cx="448" cy="113" r="0.2842732244395698" fill="#ffffff" />
          <circle cx="199" cy="146" r="1.170430944902175" fill="#ffffff" />
          <circle cx="509" cy="24" r="1.3131418067155791" fill="#ffffff" />
          <circle cx="127" cy="153" r="0.6692688227934598" fill="#ffffff" />
          <circle cx="255" cy="85" r="1.3822163151953404" fill="#ffffff" />
          <circle cx="472" cy="83" r="1.3686512037876608" fill="#ffffff" />
          <path
            d="M315.001746,134.998584 C321.072986,139.559126 325,146.819897 325,155 C325,168.807119 313.810155,180 300,180 C291.820962,180 284.559291,176.073348 279.998254,170.001416 C284.176856,173.140262 289.371187,175 295,175 C308.810155,175 320,163.807119 320,150 C320,144.370682 318.140242,139.176743 315.001746,134.998584 Z"
            fill="#ffffff"
            transform="matrix(1,0,0,1,0,0)"
          />
          <g fill="#A7ADBA" transform="matrix(1,0,0,1,20,40)">
            <polygon
              points="300,0,600,250,0,250"
              transform="matrix(1,0,0,1,-50,390)"
            />
            <polygon
              points="300,0,600,210,70,210"
              transform="matrix(1,0,0,1,70,390)"
            />
            <polygon
              points="300,0,600,190,70,190"
              transform="matrix(1,0,0,1,190,320)"
            />
            <polygon
              points="300,0,600,150,120,150"
              transform="matrix(1,0,0,1,250,420)"
            />
            <polygon
              points="300,0,600,120,170,120"
              transform="matrix(1,0,0,1,370,560)"
            />
            <g fill="#65737E" transform="matrix(1,0,0,1,-20,40)">
              <polygon
                points="800,-60,1630,145,50,145"
                transform="matrix(1,0,0,1,200,390)"
              />
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,255,355)"
              />
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,260,360)"
              />
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,270,365)"
              />
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,286,372)"
              />
            </g>
            <g fill="#4F5B66" transform="matrix(1,0,0,1,20,420)">
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,366,58)"
              />
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,386,48)"
              />
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,402,48)"
              />
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,426,38)"
              />
              <polygon
                points="10,0,20,40,0,40"
                transform="matrix(1,0,0,1,452,6)"
              />
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,476,24)"
              />
              <polygon
                points="6,0,12,20,0,20"
                transform="matrix(1,0,0,1,496,10)"
              />
              <polygon
                points="1140,0,1680,1140,0,250"
                transform="matrix(1,0,0,1,524,-110)"
              />
            </g>
            <g fill="#4F5B66" transform="matrix(1,0,0,1,-20,420)">
              <path
                d="M0 220 C 180 130, 300, 80, 600, 0 V 220 Z"
                transform="matrix(-1,0,0,1,600,0)"
              />
              <polygon
                points="34,0,76,180,0,160"
                transform="matrix(1,0,0,1,12,-150)"
              />
              <polygon
                points="34,0,72,86,0,70"
                transform="matrix(1,0,0,1,92,-40)"
              />
              <polygon
                points="20,0,30,32,10,26"
                transform="matrix(1,0,0,1,170,26)"
              />
            </g>
          </g>
        </svg>
        <Gallery gutter="large" size="medium">
          <div />
          <Card className="rightHeroCard" initialPose="exit" pose="enter">
            <Heading size={2}>About Me</Heading>
            <p>
              I'm a Full Stack Developer who specializes in writing code that
              renders data, migrates data, transforms data, governs data,
              retrieves data, stores data, and many more adjectives concerning
              data.
            </p>
            <p>
              In my free time I like to spend time with my family, run in half
              marathons, play soccer, and tinker.
            </p>
          </Card>
        </Gallery>
      </Parallax>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
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

export default IndexPage;

// Sources:
// - https://www.gatsbyjs.org/starters/?v=2
