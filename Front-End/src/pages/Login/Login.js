import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Form, Button, Container, FormGroup, Image,
} from 'react-bootstrap';
import Swal from 'sweetalert2';
import Context from '../../context/Context';
import Logo from '../../images/undraw_online_organizer_ofxm.svg';
import api from '../../service/api';

function Login() {
  const {
    emailLogin,
    setEmailLogin,
    setToken,
  } = useContext(Context);
  const [passwordLogin, setPasswordLogin] = useState('');

  const navigate = useNavigate();

  const formValidation = () => {
    const passwordMinLength = 6;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if ((passwordLogin.length >= passwordMinLength) && (emailPattern.test(emailLogin) === true)) {
      return false;
    } return true;
  };

  const logUser = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post('/', { email: emailLogin, password: passwordLogin });
      setToken(data.data.token);
      navigate('/todo');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.message}`,
        confirmButtonColor: '#3F3D56',
      });
    }
  };

  return (
    <>
      <Container style={{ width: '20rem' }} className="bg-white shadow border rounded-3 p-4 mt-5 text-center">
        <Image src={Logo} alt="Logo" className="img-fluid my-3" style={{ width: '12rem' }} />
        <Form>
          <Form.Label
            className="text-center"
            style={{ color: '#3F3D56', fontFamily: 'Pacifico, cursive', fontSize: '1.6rem' }}
          >
            My To-dos
          </Form.Label>
          <Form.Group className="my-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              required
            />
          </Form.Group>
          <FormGroup className="text-center mb-3">
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              onClick={(e) => logUser(e)}
              disabled={formValidation()}
            >
              Sign In
            </Button>
          </FormGroup>
          <FormGroup
            className="text-center"
            style={{ fontSize: '0.8rem' }}
          >
            <Form.Label className="mx-1 text-muted">
              Need an account?
            </Form.Label>
            <Link to="/register">Sign Up</Link>
            <Form.Label className="mx-1 text-muted">
              here.
            </Form.Label>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default Login;
