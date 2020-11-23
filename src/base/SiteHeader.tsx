import React from "react";
import { useHistory } from 'react-router-dom';

import { Site, Nav, Button, Text } from "tabler-react";

import { useAuth } from "../hooks/AuthContext";

const SiteHeader = () => {
  const history = useHistory();

  const { signOut, user } = useAuth();

  function handleSignOut() {
    try {
      signOut();
      history.push('/');
    } catch (err) {
      alert('Erro ao efetuar logout');
    }
  }

  return (
    <Site.Header
      href="/"
      alt="Logo"
      imageURL="/img/logo.svg"
      navItems={
        [
          <Nav.Item link={false} className="mr-5" key="name">
            <Text>
              {user.name}
            </Text>
          </Nav.Item>,
          <Nav.Item link={false} className="d-none d-md-flex" key="logout">
            <Button
              href="#"
              outline
              size="sm"
              RootComponent="a"
              color="primary"
              pill
              onClick={handleSignOut}
            >
              Sair
            </Button>
          </Nav.Item>
        ]
      }
    />
  );
};

export default SiteHeader;