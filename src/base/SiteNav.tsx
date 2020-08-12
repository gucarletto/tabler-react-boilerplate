import React from "react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

import { Site } from "tabler-react";

const navBarItems = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
];

const SiteNav = function() {
  return (
    <Site.Nav
      logoURL="./demo/brand/tabler.svg"
      isSide={true}
      side="right"
      itemsObjects={navBarItems}
    />
  );
};

export default SiteNav;