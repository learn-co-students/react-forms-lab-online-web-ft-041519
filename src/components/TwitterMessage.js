import React from "react";

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      maxChars: ''
  }
  }

  handleChange = event => {
    this.setState({ 
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.value} />
         <strong>Message Length:</strong>
         {this.props.maxChars - this.state.value.length}
      </div>
    )
  }
}