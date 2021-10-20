import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <>
      <Navbar className="nav-background" collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand className='text-white fs-2 header' to="/home"><img src="https://i.ibb.co/r7w2d1R/download-7.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className='text-white fs-6' as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link className='text-white fs-6' as={Link} to={"/services"}>Services</Nav.Link>
            <Nav.Link className='text-white fs-6' as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link className='text-white fs-6' as={Link} to={"/contact"}>Contact</Nav.Link>
            {user?.email ? <Button variant="light" onClick={logOut}>Logout</Button>
              :
              <Nav.Link className='text-white fs-6' as={Link} to={"/login"}>Login</Nav.Link>}
            <Navbar.Text className='text-white pt-3 ps-3'><small>Signed in as:</small> <a className="text-white" href="#login"><small>{user?.displayName}</small></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;