import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Form, Button, Container, FormGroup,
} from 'react-bootstrap';
import Context from '../../context/Context';
import Logo from '../../images/undraw_online_organizer_ofxm.png';

function Login() {
  const {
    emailLogin,
    setEmailLogin,
    passwordLogin,
    setPasswordLogin,
  } = useContext(Context);
  return (
    <>
      <Container style={{ width: '20rem' }} className="bg-white border rounded-3 p-4 mt-5">
        <img src={Logo} alt="Logo" className="img-fluid" />
        <Form>
          <Form.Group className="my-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
          </Form.Group>
          <FormGroup className="text-center mb-3">
            <Button variant="primary" type="submit" className="btn btn-primary" style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}>
              Sign In
            </Button>
          </FormGroup>
          <FormGroup className="text-center" style={{ fontSize: '0.8rem' }}>
            <Form.Label className="mx-2 text-muted">
              Need an account?
            </Form.Label>
            <Link to="/register">Sign Up</Link>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default Login;
