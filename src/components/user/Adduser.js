import React, { useState } from "react";

function Adduser(props) {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [cell, setCell] = useState("");
    const [uuid, setUuid] = useState("");

    const imageChangeHandler = (event) => {
        setImage(event.target.value)
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const phoneChangeHandler = (event) => {
        setPhone(event.target.value)
    }
    const cellChangeHandler = (event) => {
        setCell(event.target.value)
    }
    const uuidChangeHandler = (event) => {
        setUuid(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let user = {
            image: image,
            name: name,
            phone: phone,
            cell: cell,
            uuid: uuid
        }
        props.addUser(user)
    }

    return (
        <div className="card bg-dark text-white px-3 my-4">
            <form className="p-2" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="text" className="form-control" id="image" onChange={imageChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={nameChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" onChange={phoneChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cell" className="form-label">Cell</label>
                    <input type="tel" className="form-control" id="cell" onChange={cellChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="uuid" className="form-label">Uuid</label>
                    <input type="text" className="form-control" id="uuid" onChange={uuidChangeHandler} />
                </div>
                <button type="submit" className="btn btn-primary btn-sm float-end">Create</button>
            </form>
        </div>
        )
    };
    
    export default Adduser;