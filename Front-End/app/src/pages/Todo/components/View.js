/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Button, Container, Form,
} from 'react-bootstrap';
import Context from '../../../context/Context';
import api from '../../../service/api';

function Create() {
  const {
    tasks,
    setTasks,
    token,
  } = useContext(Context);

  const getTasks = async () => {
    const data = await api.get('/todo', { headers: { Authorization: token } });
    const allTasks = data.data;
    setTasks(allTasks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  // const navigate = useNavigate();

  const showTasks = () => (
    <Container className="d-flex mt-3 justify-content-center">
      { tasks.map((t) => (
        <Card
          style={{ minWidth: '14rem' }}
          className="mx-2 text-center"
          id={t._id}
        >
          <Card.Body>
            <Card.Title>{t.task}</Card.Title>
            <Card.Text>
              Status:
              {' '}
              {t.status}
            </Card.Text>
            <div>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary mx-1"
                style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              >
                <i className="bi bi-pencil-fill" />
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary mx-1"
                style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              >
                <i className="bi bi-trash-fill" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );

  const renderMessage = () => <Form.Label>Well done! You don&apos;t have tasks.</Form.Label>;

  const renderCards = () => ((tasks !== []) ? showTasks() : renderMessage());

  return (
    <Container className="d-flex mt-3 justify-content-center flex-column align-items-center">
      {renderCards()}
      <Link to="/todo">
        <Button
          variant="primary"
          type="submit"
          className="btn btn-primary mt-4"
          style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
        >
          <i className="bi bi-arrow-left-circle" />
        </Button>
      </Link>
    </Container>
  );
}

export default Create;
