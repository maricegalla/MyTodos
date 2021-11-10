import React, { useContext } from 'react';
import {
  Form, Button, Container, FormGroup,
} from 'react-bootstrap';
import Context from '../../context/Context';
import Logo from '../../images/undraw_To_do_list_re_9nt7.png';

function Register() {
  const {
    nameRegister,
    setNameRegister,
    emailRegister,
    setEmailRegister,
    passwordRegister,
    setPasswordRegister,
  } = useContext(Context);
  return (
    <>
      <Container style={{ width: '20rem' }} className="bg-white border rounded-3 p-4 mt-5">
        <img src={Logo} alt="Logo" className="img-fluid" />
        <Form>
          <Form.Group className="my-3">
            <Form.Control
              type="text"
              placeholder="Name"
              value={nameRegister}
              onChange={(e) => setNameRegister(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
          </Form.Group>
          <FormGroup className="text-center mb-3">
            <Button variant="primary" type="submit" className="btn btn-primary" style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}>
              Sign Up
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default Register;
