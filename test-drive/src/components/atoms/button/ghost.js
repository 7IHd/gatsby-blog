import React from "react";
import { GhostButton, GhostButtonLink } from "./style";

export default class Ghost extends React.Component {
  render() {
    return (
      <GhostButton initialPose="exit" pose="enter">
        <GhostButtonLink to={this.props.path}>{this.props.text}</GhostButtonLink>
      </GhostButton>
    );
  }
}
