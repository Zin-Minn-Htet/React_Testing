import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";

class AddPost extends Component {

    state = {
        title:"",
        desc:""
    }

    addPost = (e) => {
        e.preventDefault();
        let newPost = {id:uuid(),...this.state}
        {this.props.addPost(newPost)}
        this.setState({
            title:"",
            desc:""
        })
        this.props.navigate("/")
    }

    render() {
        return (
            <div className="card bg-dark text-white mx-4">
                <h4 className="text-center mt-3 ">Add new Post</h4>
                <form className="px-4" onSubmit={this.addPost} >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Post Title</label>
                        <input type="text" className="form-control rounded-0" id="title" onChange={e => this.setState({title: e.target.value})} value={this.state.title} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Post Description</label>
                        <input type="text" className="form-control rounded-0" id="desc" onChange={e => this.setState({desc: e.target.value})} value={this.state.desc} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm float-end mb-3">Add</button>
                </form>
            </div>
        )
    }
}

export default (props) => {
    const naviGator = useNavigate();
    return <AddPost {...props} navigate={naviGator} />
}