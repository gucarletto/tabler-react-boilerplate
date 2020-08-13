import React from "react";

import { Site } from "tabler-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

interface Props {
  children: React.ReactNode;
}

const SiteWrapper = function({ children }: Props) {
  return (
    <Site.Wrapper
      header={SiteHeader}
      navIsSide={true}
      nav={SiteNav}
      footer={SiteFooter}
    >
      {children}
    </Site.Wrapper>
  );
};

export default SiteWrapper;