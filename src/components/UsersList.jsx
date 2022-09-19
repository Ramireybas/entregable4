import axios from 'axios';
import React from 'react';

const UsersList = ({ users, selectUser, getUsers }) => {
    const deleteUser = (id) => {
        axios
            .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers());
    }
    return (
        <div>

            <ul  className='users-list'>
                {users.map(user => (
                    <li  key={user.id}>
                        <div className='card'>
                        <div> <b> Name:</b>{user.first_name}  {user.last_name}</div>
                        <div> <b>Email:</b>{user.email}</div>
                        <div><b><i className="fa-solid fa-cake-candles"></i> Birthday:</b>{user.birthday}</div>
                        <button onClick={() => selectUser(user)}>
                            <i className="fa-solid fa-pen"></i>
                        </button>
                        <button onClick={() => deleteUser(user.id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                        </div>
                    </li>
                ))
                }


            </ul>
        </div>
    );
};

export default UsersList;