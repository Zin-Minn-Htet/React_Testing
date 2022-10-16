import React, { Component } from "react";
import { useNavigate, useLocation } from "react-router-dom";

class EditPost extends Component {
    constructor(props){
        super(props);
        const post = this.props.state.state.post;
        this.state = {
            id : post.id,
            title: post.title,
            desc: post.desc
        }
    }
    updatePost (e) {
        e.preventDefault();
        this.props.updatePost(this.state);
        this.props.navigate("/")
    }
    render(){
        return(
            <div className="card bg-dark text-white mx-4">
            <h4 className="text-center mt-3 ">Add new Post</h4>
            <form className="px-4" onSubmit={this.updatePost.bind(this)} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" className="form-control rounded-0" id="title" onChange={e => this.setState({title: e.target.value})} value={this.state.title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Post Description</label>
                    <input type="text" className="form-control rounded-0" id="desc" onChange={e => this.setState({desc: e.target.value})} value={this.state.desc} />
                </div>
                <button type="submit" className="btn btn-primary btn-sm float-end mb-3">Update</button>
            </form>
        </div>
        )
    }
}

// export default EditPost;
export default (props) => {
    let navigate = useNavigate();
    let state = useLocation();
    return <EditPost {...props} navigate={navigate} state={state} />
}