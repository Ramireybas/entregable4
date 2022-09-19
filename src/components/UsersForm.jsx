import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";


const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        }
    }, [userSelected])
    const submit = (data) => {
        if (userSelected) {
            axios
                .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`
                    , data
                    )
                .then(()=>getUsers())
        } else {
            axios
                .post('https://users-crud1.herokuapp.com/users/', data)
                .then(() => getUsers())
                .catch(error => console.log(error.response));
        }
        clear();
    }
    const clear = () => {
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
        })
        deselectUser();
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2> Users Form</h2>
            <div className='input-container'>
                <label htmlFor="email"><i className="fa-regular fa-envelope"></i> Email:</label>
                <input type="email" placeholder='Email' id="email" {...register("email")} />
            </div>
            <div className='input-container'>
                <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password:</label>
                <input type="password" placeholder='Password' id="password" {...register("password")} />
            </div>
            <div className='input-container'>
                <label htmlFor="first-name"> <i className="fa-regular fa-circle-user"></i> Name:</label> 
                <input type="text" placeholder='First Name' id="first-name" {...register("first_name")} />
                <label htmlFor="last-name"></label>
                <input type="text" placeholder='Last Name' id="last-name" {...register("last_name")} />
            </div>
            <div className='input-container'>
                <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i> Birthday:</label>
                <input type="date" id="birthday" {...register("birthday")} />
            </div>
            <button>Submit</button>
            <button onClick={clear} type="button">
                clear
            </button>
        </form>
    );
};

export default UsersForm;