import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 140
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
    let remChars = 140 - this.state.value.length
    this.setState({
      maxChars: remChars,
    });

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
