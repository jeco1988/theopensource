import React, { Component } from "react";

function AddComment(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={props.comment}
        onChange={props.handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

class Comments extends Component {
  state = {
    comments: [],
    newComment: ""
  };

  handleInputChange = (event) => {
    this.setState({ newComment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      id: Date.now(),
      text: this.state.newComment
    };
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment],
      newComment: ""
    }));
  };

  render() {
    return (
      <div className="comments">
        <h2>Comments</h2>
        <ul>
          {this.state.comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
        <AddComment
          comment={this.state.newComment}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Comments;