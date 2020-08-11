import React from 'react';

import "tabler-react/dist/Tabler.css";

import { Card, Button } from "tabler-react";

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Body>
        <Button color="primary">A Button</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
