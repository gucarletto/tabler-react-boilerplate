import React from "react";

import { Site, Nav, Button, Form } from "tabler-react";

const SiteHeader = function() {

  return (
    <Site.Header
      href="/"
      alt="Tabler React"
      imageURL="./img/logo.svg"
      navItems={
        <Nav.Item link={false} className="d-none d-md-flex">
          <Button
            href="https://github.com/tabler/tabler-react"
            target="_blank"
            outline
            size="sm"
            RootComponent="a"
            color="primary"
          >
            Source code
          </Button>
        </Nav.Item>
      }
      notificationsTray={{}}
      accountDropdown={{}}
      searchBar={
        <Form.Input
          icon="search"
          position="prepend"
          placeholder="Search"
          tabIndex={-1}
          light
        />
      }
    />
  );
};

export default SiteHeader;