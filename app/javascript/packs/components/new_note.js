import React, { Component } from "react";

const errorMessage = "There was an error saving your note."

// TODO: rename 'error' 'server error'?
// TODO: submit on enter
// TODO: implement using redux form

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.post = this.post.bind(this);
    this.share = this.share.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  post() {
    const { text } = this.state;
    this.props.createNote({ text, public: false });
    this.setState({ text: "" });
  }

  share() {
    const { text } = this.state;
    this.props.createNote({ text, public: true });
    this.setState({ text: "" });
  }

  render() {
    const { error } = this.props;
    const { text } = this.state;

    return (
      <div>
        <div className="flex">
          <input type="text" value={text} onChange={this.handleChange} />
          <div>
            <button className="button-primary" onClick={this.post}>
              Post
            </button>
            <button className="button-secondary" onClick={this.share}>
              Share
            </button>
          </div>
        </div>
        {error && <p>{errorMessage}</p>}
      </div>
    )
  }
}

export default NewNote
