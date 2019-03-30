import React from "react";
// import Submit from "atoms/button/submit";
import { Link } from "gatsby";
import { Heading, Icon } from "@auth0/cosmos";
import { Card } from "layout/style";
import { Contact } from "./style";

export default class extends React.Component {
  render() {
    const { open, loading, success, onSubmitClick, onCloseClick } = this.props;
    return (
      <Contact
        open={open}
        title="Contact"
        onClose={onCloseClick}
        /*actions={[
          <Submit loading={loading} success={success} onClick={onSubmitClick} />
        ]}*/
      >
        <Heading size={3}>
          ᕕ(ᐛ)ᕗ Either send me an email or message me on LinkedIn
        </Heading>
        <a
          href="mailto:ramirezp6856@gmail.com?Subject=Hey%20Phil"
          target="_top"
        >
          <Card>
            <Icon name="mail" size="20" color="black" /> GMail
          </Card>
        </a>
        <a
          href="https://www.linkedin.com/in/ramirezp6856"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <Icon name="brand-linkedin" size="20" color="black" /> Phil Ramirez
          </Card>
        </a>
      </Contact>
    );
  }
}
