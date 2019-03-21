import React from "react";
import Media from "react-media";
import { Gallery } from "./style";

const GallerySize = function({ children }) {
  return (
    <Media query={{ minWidth: 599 }}>
      {matches =>
        matches ? (
          <Gallery gutter="none" size="large">
            {children}
          </Gallery>
        ) : (
          <Gallery gutter="medium" size="small">
            {children}
          </Gallery>
        )
      }
      }
    </Media>
  );
};

export default class extends React.Component {
  render() {
    return <GallerySize {...props} />;
  }
}
