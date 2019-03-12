import React from "react";
import Submit from "../button/submit";
import { Button } from "@auth0/cosmos";
import { Contact } from "./style";

export default class extends React.Component {
  render() {
    const { open, loading, success, onSubmitClick, onCloseClick } = this.props;
    return (
      <Contact
        open={open}
        title="Contact"
        onClose={onCloseClick}
        actions={[
          <Button loading={loading} success={success} onClick={onSubmitClick} />
        ]}
      >
        Are you sure?
      </Contact>
    );
  }
}
