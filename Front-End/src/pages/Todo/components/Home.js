import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Context from '../../../context/Context';
import Logo from '../../../images/undraw_Hello_re_3evm.png';

function Home() {
  const {
    emailLogin,
  } = useContext(Context);

  const welcome = () => {
    const userName = emailLogin.split('@')[0];
    const name = userName.charAt(0).toUpperCase() + userName.slice(1);
    return `Welcome ${name}!`;
  };

  welcome();

  return (
    <>
      <Container style={{ width: '30rem' }} className="bg-white shadow border rounded-3 p-4 mt-5">
        <Form>
          <Form.Group className="text-center mb-3">
            <Form.Label
              className="text-center align-self-center"
              style={{ color: '#3F3D56', fontFamily: 'Pacifico, cursive', fontSize: '1.6rem' }}
            >
              {welcome()}

            </Form.Label>
            <img src={Logo} alt="Logo" className="img-fluid" style={{ maxWidth: '20rem' }} />
          </Form.Group>

          <Form.Group className="d-flex text-center justify-content-evenly mb-3">
            <Link to="/todo/create">
              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              >
                Create new task
              </Button>
            </Link>
            <Link to="/todo/view">
              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: '#3F3D56', borderColor: '#3F3D56' }}
              >
                View your tasks
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default Home;
