import React from "react";

class TwitterMessage extends React.Component {
  state = {
      maxChars: this.props.maxChars,
      currentChars: 140,
      message: ''
    };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  charsLeft = () => {
    const newChars = this.state.maxChars - this.state.message.length
    this.setState({
      currentChars: newChars
    })
  }

  display = (event) => {
    this.handleChange(event);
    this.charsLeft();
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.display(event)}/>
        {this.state.currentChars}
      </div>
    );
  }
}

export default TwitterMessage;
