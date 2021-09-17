import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useAxios } from '../../hooks/useAxios';

export const NavbarApp = (props) => {
  const [url, seturl] = useState(null);

  useAxios('GET', url, null, {
    Authorization: `Bearer ${localStorage.access_token}`,
  });
  const handleLogout = () => {
    if (localStorage.access_token) {
      console.log('logout');
      seturl('auth/logout');
      localStorage.clear();
      seturl(null);
      console.log(localStorage.access_token);
    }
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/sign-in">BancoApp</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/sign-in" onClick={handleLogout}>
            {localStorage.access_token ? 'logout' : 'login'}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
