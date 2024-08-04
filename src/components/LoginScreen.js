import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/lock.jpeg') no-repeat center center/cover;
`;

const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

function LoginScreen({ show, onClose }) {
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    // Add your login logic here
    console.log("Login submitted");
    onClose(); // Close the modal after handling login
  };

  return (
    <Modal show={show} fullscreen onHide={onClose}>
      <Modal.Body>
        <LoginContainer>
          <LoginBox>
            <h2>Welcome</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Login
              </Button>
            </Form>
          </LoginBox>
        </LoginContainer>
      </Modal.Body>
    </Modal>
  );
}

export default LoginScreen;