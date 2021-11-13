import React, { useContext, useState, useEffect } from 'react';
import {
  Form, Button, Container, Image,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Swal from 'sweetalert2';
import Context from '../../../context/Context';
import api from '../../../service/api';
import Logo from '../../../images/undraw_options_re_9vxh.svg';

function Edit() {
  const {
    token,
    selectedId,
  } = useContext(Context);

  const [task, setTask] = useState('');
  const [status, setStatus] = useState(null);
  const [required, setRequired] = useState(true);

  const navigate = useNavigate();

  const formValidation = () => {
    const taskMinLength = 3;
    if ((task.length >= taskMinLength) && (status !== null)) {
      return false;
    } return true;
  };

  const getTask = async () => {
    const data = await api.get(`/todo/${selectedId}`, { headers: { Authorization: token } });
    const editedTask = data.data;
    setTask(editedTask.task);
    setStatus({ label: editedTask.status, value: editedTask.status });
  };

  useEffect(() => {
    getTask();
  }, []);

  const saveTask = async (e) => {
    e.preventDefault();
    try {
      const data = await api.put(`/todo/${selectedId}`, { task, status: status.value }, { headers: { Authorization: token } });
      Swal.fire({
        icon: 'success',
        title: 'Congrats!',
        text: `${data.data}`,
        confirmButtonColor: '#3F3D56',
      }).then(() => {
        navigate('/todo/view');
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
    navigate('/todo/view');
  };

  return (
    <>
      <Container style={{ width: '20rem' }} className="bg-white shadow border rounded-3 p-4 mt-4">
        <Form>
          <Form.Group className="text-center mb-3">
            <Form.Label
              className="text-center align-self-center"
              style={{ color: '#3F3D56', fontFamily: 'Pacifico, cursive', fontSize: '1.6rem' }}
            >
              Edit Task

            </Form.Label>
            <Image src={Logo} alt="Logo" className="img-fluid my-2" style={{ maxWidth: '11rem' }} />
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
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              onClick={(e) => saveTask(e)}
              disabled={formValidation()}
            >
              Edit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default Edit;
