import React from "react";

import SiteWrapper from "../base/SiteWrapper";

import C3Chart from "../C3Chart";

import {
  Page,
  Card,
  Button
} from "tabler-react";

function Home() {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Card>
          <Card.Header>
            <Card.Title>Card Title</Card.Title>
          </Card.Header>
          <Card.Body>
            <Button color="primary">A Button</Button>
          </Card.Body>
        </Card>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;