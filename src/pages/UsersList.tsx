import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import SiteWrapper from "../base/SiteWrapper";

import api from '../services/api';

import {
  Page,
  Card,
  Table,
  Text,
  Button,
  Form
} from "tabler-react";

interface User {
  id: number;
  name: string;
}

function UsersList() {
  const [users, setUsers] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [page, setPage]= useState(1);
  const [pageCount, setPageCount]= useState(0);

  useEffect(() => {
    updateUsersList();
  }, [page]);

  function updateUsersList() {
    const params = {
      page
    };
    api.get('users', { params }).then(response => {
      setUsers(response.data);
      setPageCount(response.data.pages);
    });
  };

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setNameSearch(event.target.value);
  }

  function handleSubmitSearch(event: FormEvent) {
    event.preventDefault();

    const params = {
      name: nameSearch
    }

    api.get('users', { params }).then(response => {
      setUsers(response.data.transactions);
      setPageCount(response.data.pages);
    });
  }

  const handlePaginate = useCallback((selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
    updateUsersList();
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
            <Form onSubmit={handleSubmitSearch}>
                <Form.InputGroup>
                  <Form.Input
                    className="form-control-sm"
                    placeholder="Name"
                    name="name"
                    onChange={handleNameChange}
                  />
                  <span className="input-group-btn ml-2">
                    <Button
                      size="sm"
                      color="default"
                      type="submit"
                      icon="search"
                    />
                  </span>
                </Form.InputGroup>
              </Form>
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
          <Card.Footer>
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={handlePaginate}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </Card.Footer>
        </Card>
      </Page.Content>
    </SiteWrapper>
  );
}

export default UsersList;