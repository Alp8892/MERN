import React, { useState } from 'react'
import axios from 'axios';
const PersonForm = (props) => {
    const {people, setPeople} = props;
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ description, setDescription ] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName,
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setPeople([...people, res.data]);
            })
            .catch(err=> console.log(err))
    }

    
    return (
        <form onSubmit={onSubmitHandler}><br/>
            <p>
                <label>Product Title</label><br/>
                <input type="text" onChange = {
                    (e) => setFirstName(e.target.value)
                }/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type = "text" onChange = {
                    (e) => setLastName(e.target.value)
                }/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type = "text" onChange = {
                    (e) => setDescription(e.target.value)
                }/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default PersonForm;