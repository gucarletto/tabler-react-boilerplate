import React, { useEffect, useState } from 'react';

import SiteWrapper from "../../base/SiteWrapper";

import api from '../../services/api';

import {
  Page,
  Card,
  Table,
  Text,
  Button,
  Icon
} from "tabler-react";

interface User {
  id: number;
  name: string;
}

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    });
  }, []);

  function handleEditClick(user: User) {
    alert(user.name);
  }

  function handleDeleteClick(user: User) {
    alert(user.name);
  }

  return (
    <SiteWrapper>
      <Page.Content>
        <Card>
          <Card.Header>
            <Card.Title>Clientes</Card.Title>
            <Card.Options>
              <Button RootComponent="a" color="secondary" size="sm" icon="plus" >
                Incluir
              </Button>
            </Card.Options>
          </Card.Header>
          <Table
            responsive
            className="card-table table-vcenter text-nowrap"
            headerItems={[
              { content: "Nome", className: "w-1" },
              { content: null },
            ]}
            bodyItems={
              users.map((user: User) => {
                return {
                  key: user.id,
                  item: [
                    {
                      content: (
                        <Text>
                          {user.name}
                        </Text>
                      ),
                    },
                    {
                      alignContent: "right",
                      content: (
                        <>
                          <Button
                            RootComponent="a"
                            color="secondary"
                            size="sm"
                            className="m-1"
                            icon="edit"
                            onClick={() => handleEditClick(user)}
                          />
                          <Button
                            RootComponent="a"
                            color="secondary"
                            size="sm"
                            className="m-1"
                            icon="trash"
                            onClick={() => handleDeleteClick(user)}
                          />
                        </>
                      ),
                    },
                  ]
                }
              })
            }
          />
        </Card>
      </Page.Content>
    </SiteWrapper>
  );
}

export default UsersList;