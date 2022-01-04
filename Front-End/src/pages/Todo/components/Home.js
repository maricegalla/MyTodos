import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Form, Button, Container, Image,
} from 'react-bootstrap';
import Context from '../../../context/Context';
import Logo from '../../../images/undraw_hello_re_3evm.svg';

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
      <Container style={{ width: '30%' }} className="bg-white shadow rounded-3 mx-auto my-5 py-5">
        <Form>
          <Form.Group className="d-flex flex-column justify-content-center text-center">
            <Form.Label
              className="text-center align-self-center"
              style={{ color: '#3F3D56', fontFamily: 'Pacifico, cursive', fontSize: '1.6rem' }}
            >
              {welcome()}

            </Form.Label>
            <Image src={Logo} alt="Logo" className="img-fluid align-self-center my-4" style={{ maxWidth: '17rem' }} />
          </Form.Group>

          <Form.Group className="d-flex text-center justify-content-evenly">
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
