import React from "react";

//This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have.
//This prop is being passed in from the App component with the value 140.
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

//Show the remaining characters in the component
  remainingChars = () => {
    const newChars = this.state.maxChars - this.state.message.length
    this.setState({
      currentChars: newChars
    })
  }

  display = (event) => {
    this.handleChange(event);
    this.remainingChars();
  }

//Make this a controlled component by adding the attributes to the <input> element.
//Its value should be saved in the component's state and should update on every change to the input
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
