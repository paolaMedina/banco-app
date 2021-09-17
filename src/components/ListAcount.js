import React from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';
import { useAxios } from '../hooks/useAxios';

export const ListAcount = (props) => {
  const { data } = useAxios('GET', 'acount', null, {
    Authorization: `Bearer ${localStorage.access_token}`,
  });
  const handleCreate = () => {
    props.history.push(`/acount/[]`);
  };
  return (
    <div className="wrapper">
      <div>
        <Button variant="primary" size="lg" onClick={handleCreate}>
          Crear Cuenta
        </Button>
      </div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Titular</th>
            <th>Documeno Titular</th>
            <th>Tipo Cuenta</th>
            <th>Monto Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.holder.names}</td>
              <td>{e.holder.identity_card}</td>
              <td>{e.type}</td>
              <td>{e.balance}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button>Ver</Button>
                  <Button>Editar</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
