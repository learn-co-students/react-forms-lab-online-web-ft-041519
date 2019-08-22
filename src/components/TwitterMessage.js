import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      count: props.maxChars
    };
  }

  handleChange = event => {
    const newCount = this.state.count - this.state.message.length
    this.setState({
      [event.target.name]: event.target.value,
      count: newCount
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
