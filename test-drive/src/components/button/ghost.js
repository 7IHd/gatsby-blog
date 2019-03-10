import React from "react";
import { GhostButton, GhostButtonLink } from "./style";

export default class Ghost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: props.text,
        path: props.path
    }
  }
  render() {
    return (
      <GhostButton key={props.text} initialPose="exit" pose="enter">
        <GhostButtonLink to={props.path}>{props.text}</GhostButtonLink>
      </GhostButton>
    );
  }
}
