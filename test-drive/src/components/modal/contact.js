import React from "react";
import Ghost from "../button/ghost";
import { Contact } from "./style";

export default class extends React.Component {
  render() {
    return (
      <Contact
        open={this.props.open}
        title="Example Dialog"
        width="100%"
        onClose={this.props.onContactClick}
        actions={[
          <Ghost
            text="OK"
            onClick={() => {
              alert("You've performed the 'OK' action.");
            }}
          >
            OK
          </Ghost>,
          <Ghost
            text="Cancel"
            onClick={() => {
              alert("You've performed the 'Cancel' action.");
            }}
          >
            Cancel
          </Ghost>
        ]}
      >
        Are you sure?
      </Contact>
    );
  }
}
