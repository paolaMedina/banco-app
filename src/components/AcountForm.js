import React, { useState } from 'react';
import { Form, Button, Spinner, InputGroup } from 'react-bootstrap';
import { useAxios } from '../hooks/useAxios';
import { useForm } from '../hooks/useForm';

export const AcountForm = (props) => {
  console.log(props.match.params.data);
  console.log('acount');
  const [valuesForm, handleInputChange] = useForm({
    count_type: '',
    count_amount: '',
    holder_names: '',
    holder_number: '',
    holder_email: '',
  });
  const { count_type, count_amount, holder_names, holder_number, holder_email } = valuesForm;

  const [url, seturl] = useState(null);
  const [body, setbody] = useState(null);

  const { data, loading, error } = useAxios('POST', url, body, {
    Authorization: `Bearer ${localStorage.access_token}`,
  });
  if (data) {
    props.history.push('/list-acounts');
  }
  console.log(data);
  const handleOnSubmit = (e) => {
    console.log('k');
    e.preventDefault();
    seturl('acount');
    setbody({
      balance: count_amount,
      type: count_type,
      client: {
        names: holder_names,
        identity_card: holder_number,
        email: holder_email,
      },
    });
  };
  return (
    <div className="wrapper">
      <Form onSubmit={handleOnSubmit}>
        <h3>CUENTA</h3>
        <Form.Group className="mb-3">
          <Form.Label>Tipo</Form.Label>
          <Form.Select name="count_type" value={count_type} onChange={handleInputChange}>
            <option value="">Seleccione</option>
            <option value="ahorro">Ahorro</option>
            <option value="corriente">Corriente</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Monto total</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control name="count_amount" value={count_amount} onChange={handleInputChange} />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <br />
        <h5>Titular</h5>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="text" name="holder_names" value={holder_names} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Identificación</Form.Label>
          <Form.Control type="text" name="holder_number" value={holder_number} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            name="holder_email"
            placeholder="name@example.com"
            value={holder_email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit" className="btn btn-primary " variant="primary">
          {body && loading && <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />}
          Guardar
        </Button>
      </Form>
    </div>
  );
};
