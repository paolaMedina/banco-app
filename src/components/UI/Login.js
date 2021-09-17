import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { useAxios } from '../../hooks/useAxios';
import { useForm } from '../../hooks/useForm';

export const Login = (props) => {
  const [valuesForm, handleInputChange] = useForm({ email: '', password: '' });
  const { email, password } = valuesForm;
  const [url, seturl] = useState(null);
  const { data, loading, error } = useAxios('POST', url, valuesForm);
  if (data) {
    localStorage.access_token = data.access_token;
    props.history.push('/list-acounts');
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    seturl('auth/login');
  };
  return (
    <div className="auth-inner">
      <Form onSubmit={handleOnSubmit}>
        <h3>Login</h3>
        <Form.Group className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Ingresa Contraseña"
          />
        </Form.Group>
        <Button type="submit" className="btn btn-primary " variant="primary">
          {url && loading && <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />}
          Login
        </Button>

        {error && <Alert variant="danger">Error al loguearse</Alert>}
      </Form>
    </div>
  );
};
