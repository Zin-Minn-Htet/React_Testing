import React, { Component } from "react";
import userImage from "../images/user.png";

class PostCard extends Component {
    render() {
        return (
            <div className="card mb-2 mx-2">
                <div className="row px-2">
                    <div className="col-2 mt-2">
                        <img src={userImage} width="50px" height="50px" />
                    </div>
                    <div className="col-5">
                        <h5>{this.props.post.title}</h5>
                        <p>{this.props.post.desc}</p>
                    </div>
                    <div className="col-5 mt-3">
                        <button className="btn btn-info btn-sm me-2">
                            <i className="fa fa-eye"></i>
                        </button>
                        <button className="btn btn-warning btn-sm me-2">
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-danger btn-sm">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;