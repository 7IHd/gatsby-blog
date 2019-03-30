import React from "react";
import { Resume } from "molecules/table/style";
import Experience from "molecules/table/experience";
import Education from "molecules/table/education";

export default class extends React.Component {
  render() {
    return (
      <Resume>
        <Experience />
        <Education />
      </Resume>
    );
  }
}
