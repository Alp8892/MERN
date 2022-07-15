import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const Detail = (props) => {
    const [person, setPerson] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + id)
        .then( res => {
            console.log(res.data);
            setPerson(res.data);
        })
        .catch( err => console.log(err))
    }, [])
    return (
        <div>
            <p>Product Title: {person.firstName}</p>
            <p>Price: {person.lastName}</p>
            <p>Description: {person.description}</p>
        </div>
    )
}
export default Detail;