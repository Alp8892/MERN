import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [ description, setDescription ] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updatePerson = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, {
            firstName,
            lastName, 
            description
        })
        .then(res => {
            console.log(res);
            navigate("/");
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Product Title:</label><br/>
                    <input type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value)}} />
                </p>
                <p>
                    <label>Price:</label><br />
                    <input type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value)}} />
                </p>
                <p>
                    <label>Description:</label><br />
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value)}} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;