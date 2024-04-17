import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Login from '../../assets/User Profile_Monochromatic 2.svg';
import { Container, Image, User } from "./styles";
import { H1 } from '../../components/title/style';
import { Button } from '../../components/Button/styles';
import { ContainerItens } from '../../components/ContainerItens/styles';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();



  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers);
    }
    fetchUsers()
  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    history.goBack()
  }

  return (
    <Container>

      <Image src={Login} />

      <ContainerItens isBlur={true}>

        <H1>Usuários!</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)} >🗑</button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage} >👈🏻   Voltar</Button>

      </ContainerItens>
    </Container>
  );
}

export default Users;