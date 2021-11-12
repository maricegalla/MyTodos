import React, { useContext } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Context from '../../../context/Context';
import api from '../../../service/api';

function Create() {
  const {
    token,
  } = useContext(Context);

  // const navigate = useNavigate();

  const getTasks = async () => {
    // e.preventDefault();
    try {
      const data = await api.get('/todo', { headers: { Authorization: token } });
      console.log(data.data);
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
      <Container style={{ width: '20rem' }} className="bg-white border rounded-3 p-4 mt-5">
        <Form>
          {token}
        </Form>
        <Button onClick={() => getTasks()}>
          Click
        </Button>
      </Container>
    </>
  );
}

export default Create;
