import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Form, Button,
} from 'react-bootstrap';
import Context from '../../../context/Context';

function Header() {
  const {
    setToken,
    setEmailLogin,
    setTasks,
    emailLogin,
  } = useContext(Context);

  const navigate = useNavigate();

  const handleExit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure',
      text: 'You want to quit?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3F3D56',
      cancelButtonColor: '#3F3D56',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        setToken('');
        setEmailLogin('');
        setTasks([]);
        navigate('/');
      }
    });
  };

  return (
    <Form className="container-fluid d-flex align-items-center justify-content-between py-3 px-5" style={{ backgroundColor: '#3F3D56' }}>
      <Form.Group className="d-flex flex-column align-items-center">
        <i
          className="bi bi-person-circle me-2 text-center"
          style={{ fontSize: '1.5rem', color: '#FFF' }}
        />
        <Form.Label style={{ color: '#FFF' }}>{emailLogin}</Form.Label>
      </Form.Group>
      <Form.Label
        className="text-center"
        style={{ color: '#FFF', fontFamily: 'Pacifico, cursive', fontSize: '1.6rem' }}
      >
        My To-dos
      </Form.Label>
      <Button
        variant="primary"
        type="submit"
        style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
        className="btn btn-light"
        onClick={(e) => handleExit(e)}

      >
        <i
          className="bi bi-door-open-fill"
          style={{ fontSize: '1.5rem', color: '#FFF' }}
        />
      </Button>
    </Form>
  );
}

export default Header;
