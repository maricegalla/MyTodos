/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Card, Button, Container, Image,
} from 'react-bootstrap';
import Context from '../../../context/Context';
import api from '../../../service/api';
import Logo from '../../../images/undraw_celebration_re_kc9k.svg';

function View() {
  const {
    tasks,
    setTasks,
    token,
    setSelectedId,
  } = useContext(Context);
  const [buttonDate, setButtonDate] = useState(true);
  const [buttonTask, setButtonTask] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);

  const getTasks = async () => {
    const data = await api.get('/todo', { headers: { Authorization: token } });
    const allTasks = data.data;
    setTasks(allTasks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    setSelectedId(id);
    navigate(`/todo/edit/${id}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3F3D56',
      cancelButtonColor: '#3F3D56',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const data = await api.delete(`/todo/${id}`, { headers: { Authorization: token } });
          Swal.fire({
            icon: 'success',
            title: 'Congrats!',
            text: `${data.data}`,
            confirmButtonColor: '#3F3D56',
          }).then(() => {
            navigate('/todo/');
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
      }
    });
  };

  const showTasks = () => (
    <Container className="d-flex my-4 justify-content-center flex-wrap">
      { tasks.map((t) => (
        <Card
          style={{ minWidth: '14rem' }}
          className="text-center shadow mx-2"
          id={t._id}
        >
          <Card.Body>
            <Card.Title className="text-center">
              <Card.Text style={{ fontSize: '0.7rem' }}>
                Task
              </Card.Text>
              {t.task}
            </Card.Title>
            <Card.Text className="text-center">
              <Card.Text style={{ fontSize: '0.7rem' }}>
                Status
              </Card.Text>
              {t.status}
            </Card.Text>
            <Card.Text className="text-center">
              <Card.Text style={{ fontSize: '0.7rem' }}>
                Created At
              </Card.Text>
              {t.createdAt}
            </Card.Text>
            <div className="text-center">
              <Button
                id={t._id}
                variant="primary"
                type="submit"
                className="btn btn-primary mx-1"
                style={{ backgroundColor: '#EFA624', borderColor: '#EFA624' }}
                onClick={(e) => handleEdit(e)}
              >
                <i className="bi bi-pencil-fill" />
              </Button>
              <Button
                id={t._id}
                variant="primary"
                type="submit"
                className="btn btn-primary mx-1"
                style={{ backgroundColor: '#EFA624', borderColor: '#EFA624' }}
                onClick={(e) => handleDelete(e)}
              >
                <i className="bi bi-trash-fill" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );

  const renderMessage = () => (
    <div className="text-center mt-4">
      <Image src={Logo} alt="Logo" className="img-fluid" style={{ maxWidth: '12rem' }} />
      <p className="mt-4">Well done! You don&apos;t have tasks.</p>
    </div>
  );

  const renderCards = () => ((tasks.length > 0) ? showTasks() : renderMessage());

  const handleTask = () => {
    setButtonTask(true);
    setButtonDate(false);
    setButtonStatus(false);
    const sortByTask = tasks.sort((a, b) => a.task.localeCompare(b.task));
    showTasks(sortByTask);
  };

  const handleDate = () => {
    setButtonDate(true);
    setButtonTask(false);
    setButtonStatus(false);
    const sortByDate = tasks.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    showTasks(sortByDate);
  };

  const handleStatus = () => {
    setButtonStatus(true);
    setButtonDate(false);
    setButtonTask(false);
    const sortByStatus = tasks.sort((a, b) => a.status.localeCompare(b.status));
    showTasks(sortByStatus);
  };

  return (
    <Container className="d-flex mt-3 justify-content-center flex-column align-items-center">
      <div>
        <Button
          variant="primary"
          type="submit"
          className="btn btn-primary mt-2 mx-2"
          style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
          disabled={buttonDate}
          onClick={() => handleDate()}
        >
          Order by Date
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="btn btn-primary mt-2 mx-2"
          style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
          disabled={buttonTask}
          onClick={() => handleTask()}
        >
          Order by task
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="btn btn-primary mt-2 mx-2"
          style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
          disabled={buttonStatus}
          onClick={() => handleStatus()}
        >
          Order by status
        </Button>
      </div>
      {renderCards()}
      <div>
        <Link to="/todo">
          <Button
            variant="primary"
            type="submit"
            className="btn btn-primary mt-3 mx-2"
            style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
          >
            Return
          </Button>
        </Link>
        <Link to="/todo/create">
          <Button
            variant="primary"
            type="submit"
            className="btn btn-primary mt-3 mx-2"
            style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
          >
            Create new task
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default View;
