import React from "react";
import { Dialog, Button } from "@auth0/cosmos";

export default class ContactModal extends React.Component {
  render() {
    return (

        <Dialog
          open={this.props.open}
          title="Example Dialog"
          onClose={this.props.onContactClick}
          actions={[
            <Button
              appearance="primary"
              onClick={() => {
                alert("You've performed the 'OK' action.");
              }}
            >
              OK
            </Button>,
            <Button
              appearance="secondary"
              onClick={() => {
                alert("You've performed the 'Cancel' action.");
              }}
            >
              Cancel
            </Button>
          ]}
        >
          Are you sure?
        </Dialog>
    );
  }
}
