import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Swal from 'sweetalert2';
import Context from '../../../context/Context';
import api from '../../../service/api';

function Create() {
  const {
    token,
  } = useContext(Context);

  const [task, setTask] = useState('');
  const [status, setStatus] = useState(null);
  const [required, setRequired] = useState(true);

  const navigate = useNavigate();

  const formValidation = () => {
    const taskMinLength = 5;
    if ((task.length >= taskMinLength) && (status !== null)) {
      return false;
    } return true;
  };

  const saveTask = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post('/todo', { task, status: status.value }, { headers: { Authorization: token } });
      Swal.fire({
        icon: 'success',
        title: 'Congrats!',
        text: `${data.data}`,
        confirmButtonColor: '#3F3D56',
      }).then(() => {
        navigate('/todo');
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

  const options = [
    { value: 'Done', label: 'Done' },
    { value: 'In Development', label: 'In Development' },
    { value: 'Pending', label: 'Pending' },
  ];

  const cancelButton = () => {
    setRequired(false);
    navigate('/todo');
  };

  return (
    <>
      <Container style={{ width: '20rem' }} className="bg-white border rounded-3 p-4 mt-5">
        <Form>
          <Form.Group className="text-center mb-3">
            <Form.Label
              className="text-center align-self-center"
              style={{ color: '#3F3D56', fontFamily: 'Pacifico, cursive', fontSize: '1.6rem' }}
            >
              New Task

            </Form.Label>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Control
              type="text"
              placeholder="Place your task here"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required={required}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Select
              placeholder="Select a status"
              value={status}
              onChange={(option) => (option ? setStatus({ ...option }) : setStatus(null))}
              options={options}
              isClearable
            />
          </Form.Group>
          <Form.Group className="d-flex text-center justify-content-evenly text-center mb-3">
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              onClick={() => cancelButton()}
            >
              <i className="bi bi-x-circle-fill" />
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              onClick={(e) => saveTask(e)}
              disabled={formValidation()}
            >
              <i className="bi bi-check-circle-fill" />
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default Create;
