import React, { Component } from 'react';
import {
  Panel,
  Col,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBarUser = props => (
  <Navbar className="navbar navbar-default navbar-fixed-top">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/login">Reacting Blog</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Navbar.Form pullRight>
      <LinkContainer to="linkDaftar">
        <Button className="btn-paired">Daftar</Button>
      </LinkContainer>
      <Button onClick={props.logOut} bsStyle="primary">Logout</Button>
    </Navbar.Form>
  </Navbar>
);

export { NavBarUser };
