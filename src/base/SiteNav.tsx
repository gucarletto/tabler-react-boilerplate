import React from "react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

import { Site } from "tabler-react";

const navBarItems = [
  {
    value: "Dashboard",
    to: "/",
    icon: "home",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Users",
    to: "/customers",
    icon: "users",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  }
];

const SiteNav = () => {
  return (
    <Site.Nav
      logoURL="/img/logo.svg"
      isSide={true}
      side="left"
      itemsObjects={navBarItems}
    />
  );
};

export default SiteNav;