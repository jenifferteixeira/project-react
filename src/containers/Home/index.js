import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Login from '../../assets/Consulting_Isometric 1.svg';
import { Container, Image, InputLabel, Input } from "./styles";
import { H1 } from '../../components/title/style';
import {Button} from '../../components/Button/styles';
import { ContainerItens } from '../../components/ContainerItens/styles';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users",
      {
        name: inputName.current.value,
        age: inputAge.current.value,
      });

    setUsers([...users, newUser]);

    history.push('/usuarios')

  };

  return (
    <Container>

      <Image src={Login} />

      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar     👉🏻</Button>

      </ContainerItens>
    </Container>
  );
}

export default App