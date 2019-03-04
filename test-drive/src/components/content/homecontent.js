import React from "react";
import { PageLayout } from "@auth0/cosmos";
import HeroStream from "../sections/herostream";
import SectionDivider from "../sections/sectiondivider";
import Foreground from "../sections/foreground";

export default class HomeContent extends React.Component {
  render() {
    return (
      <PageLayout.Content>
        <HeroStream />
        <SectionDivider />
        <Foreground />
      </PageLayout.Content>
    );
  }
}
