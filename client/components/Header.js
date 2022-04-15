import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

const Header = ({currentUser}) => {
    const links = [
        !currentUser && { label: "Sign Up", href: '/client/signup'},
        !currentUser && { label: "Sign In", href: "/client/signin"},
         currentUser && { label: "Sign Out", href: "/client/signout"}
    ].filter(linkConfig => linkConfig)
    .map(({label, href}) =>{
        return <li key={href} className="nav-item">
            <Link href={href}>
                <a className="nav-link" >{label}</a>
            </Link>
        </li>
    })

    const logo = 'https://i.imgur.com/WXxg0Lq.jpeg'
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Shortener.dev logo"
                />
                </Navbar.Brand>
                <Navbar.Brand href="/">Shortener.dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                <div className="d-flex justify-content-end">
                    <ul className="nav d-flex align-items-center">
                        {links}
                    </ul>
                </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header