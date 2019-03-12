import React from "react";
import Submit from "atoms/button/submit";
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
          <Submit loading={loading} success={success} onClick={onSubmitClick} />
        ]}
      >
        Are you sure?
      </Contact>
    );
  }
}
