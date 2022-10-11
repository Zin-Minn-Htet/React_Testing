import React from "react";

function User (props) {

    let userHendle = () => {
       props.remove(props.data.uuid)
    }

    return (
        <div className="card mb-3">
        <div className="row">
        <div className="col-3">
        <img src={props.data.image} width="50px" height="50px"></img>
        </div>
        <div className="col-4"> 
        <strong>Ph: {props.data.phone}</strong>
        <br></br>
        <strong>Cell: {props.data.cell}</strong>
        </div >
        <div className="col-3 mt-2">
            <strong>
                {props.data.name}
            </strong>
        </div>
        <div className="col-2">
        <button className="btn btn-danger btn-sm mt-2" onClick={userHendle} >
        <i className="fa-solid fa-trash"></i>
        </button>
        </div>
        
        </div>
        </div>
        );
    }
    
    export default User;