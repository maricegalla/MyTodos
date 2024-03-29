import React, { useState } from 'react';
import {
  Form, Button, Container, FormGroup, Image,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Logo from '../../images/undraw_to_do_list_re_9nt7.svg';
import api from '../../service/api';

function Register() {
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const formValidation = () => {
    const passwordMinLength = 6;
    const nameMinLength = 2;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if ((passwordRegister.length >= passwordMinLength) && (emailPattern.test(emailRegister) === true) && (nameRegister.length >= nameMinLength)) {
      return false;
    } return true;
  };

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post('/register', { name: nameRegister, email: emailRegister, password: passwordRegister });
      Swal.fire({
        icon: 'success',
        title: 'Congrats!',
        text: `${data.data}`,
        confirmButtonColor: '#3F3D56',
      }).then(() => {
        navigate('/');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.message}`,
        confirmButtonColor: '#3F3D56',
      });
    }
  };

  const cancelButton = () => {
    navigate('/');
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
              type="text"
              placeholder="Name"
              value={nameRegister}
              onChange={(e) => setNameRegister(e.target.value)}
              required
              className="form-control"
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
              required
              className="form-control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
              required
            />
          </Form.Group>
          <FormGroup className="text-center mb-3">
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary mx-2"
              style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              onClick={(e) => cancelButton(e)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary mx-2"
              style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              disabled={formValidation()}
              onClick={(e) => registerUser(e)}
            >
              Sign Up
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default Register;
