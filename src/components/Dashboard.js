import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from "react-router-dom";

export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.pushState('/login');
        } catch {
            setError('Failed to log out');
        };
    };

    function fixName() {
        if (currentUser.displayName === null) {
            return "No name";
        } else {
            return currentUser.displayName;
        };
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand style={{ paddingLeft: "17px" }}>
                    <img
                        src="/logoDash.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="App logo"
                    />{' '}
                    Flatlife
                </Navbar.Brand>
                {error && <Alert variant="danger">{error}</Alert>}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav>
                <Nav.Link href="/add-food">Add food</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <NavDropdown title={fixName()} id="basic-nav-dropdown" style={{ paddingRight: "17px" }}>
                            <NavDropdown.Item href="#action/3.1">x</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">x</NavDropdown.Item>
                            <NavDropdown.Item href="/update-profile">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => { handleLogout(); }}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
