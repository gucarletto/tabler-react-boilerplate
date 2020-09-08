import React from "react";

import { Site } from "tabler-react";

const SiteHeader = () => {

  return (
    <Site.Header
      href="/"
      alt="System"
      imageURL="./img/logo.svg"
    />
  );
};

export default SiteHeader;