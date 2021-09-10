import React from "react";
import logo from '../img/logo.svg';
import {Container, Navbar, Nav, Button, NavItem} from "react-bootstrap"


export function TopNav(){
    return( 
      <Navbar collapseOnSelect expand='lg' variant='dark' className="navbar pt-3 px-4 pt-md-5 px-md-5">
        <Container fluid>
          <Navbar.Brand href="#home">
              <img
                  src={logo}
                  width="132px"
                  className="d-inline-block align-top"
                  alt="Xepelin"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#soluciones" className="mx-md-4">Soluciones</Nav.Link>
              <Nav.Link href="#nosotros" className="mx-md-4">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#recursos" className="mx-md-4">Recursos</Nav.Link>
              <Nav.Link href="#jobboard" className="mx-md-4">Job Board</Nav.Link>
            </Nav>
            <Nav>
              <NavItem>
                <Button variant="outline-light" className="mx-md-2 rounded-4 px-5" href="https://mx.xepelin.com/start/login">Ingresar</Button>
              </NavItem>
              <NavItem>
                <Button variant="light" className="mx-md-2 rounded-4 px-5" href="https://mx.xepelin.com/start/register">Regístrarte</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}