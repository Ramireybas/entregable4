import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import './Styles.css';
import axios from "axios";
import fondo from './assets/fondo.svg'


function App() {
  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data));

  }
  const selectUser = (user) => {
    setUserSelected(user)
  }

  const deselectUser = () => setUserSelected(null);


  return (
    <div className='App'>
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser} />
      <UsersList
        users={users}
        selectUser={selectUser}
        getUsers={getUsers}
      />
    </div>
  );
};

export default App;