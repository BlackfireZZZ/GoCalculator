import React, { useState } from "react";
import { Button, Form, Modal, Nav, Navbar } from "react-bootstrap";

function Header({ loginUrl, registerUrl, adminActionUrl }) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showAdminModal, setShowAdminModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [apiKey, setApiKey] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminButtonText, setAdminButtonText] = useState("Add admin");

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);
    const handleCloseAdminModal = () => setShowAdminModal(false);
    const handleShowAdminModal = () => setShowAdminModal(true);

    const handleLogin = () => {
        fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Login failed");
                }
                setShowLoginModal(false); // Закрываем модальное окно при успешном входе
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleRegister = () => {
        fetch(registerUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Registration failed");
                }
                setRegistrationSuccess(true);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
                setRegistrationSuccess(false);
            });
    };

    const handleAdminAction = () => {
        fetch(adminActionUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: apiKey,
            },
            body: JSON.stringify({
                username: username,
                is_admin: isAdmin,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Admin action failed");
                }
                setShowAdminModal(false); // Закрываем модальное окно при успешном выполнении действия
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleSwitchChange = () => {
        setIsAdmin(!isAdmin);
        setAdminButtonText(isAdmin ? "Add admin" : "Delete admin");
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        src={process.env.PUBLIC_URL + "/logo.png"}
                        alt="Logo"
                        height={100}
                    />
                    <span style={{ marginLeft: "10px" }}>GoCalculator</span>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href={"/expressions"}>Expressions</Nav.Link>
                    <Nav.Link href="/config">Configuration</Nav.Link>
                    <Nav.Link href="/agents">Agents</Nav.Link>
                </Nav>
                <Button
                    variant="outline-light"
                    style={{ marginRight: "10px" }}
                    onClick={handleShowAdminModal}
                >
                    Admin
                </Button>
                <Button
                    variant="outline-light"
                    onClick={handleShowLoginModal}
                >
                    Login
                </Button>
            </Navbar>

            <Modal show={showAdminModal} onHide={handleCloseAdminModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Admin Panel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicApiKey">
                            <Form.Label>API Key</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter API Key"
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Login</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicSwitch">
                            <Form.Check
                                checked={isAdmin}
                                type="switch"
                                label={adminButtonText}
                                onChange={handleSwitchChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAdminAction}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {registrationSuccess && (
                        <p style={{ color: "green" }}>
                            Вы зарегистрированы, можете войти в аккаунт
                        </p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleLogin}>
                        Login
                    </Button>
                    <Button variant="primary" onClick={handleRegister}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header;
