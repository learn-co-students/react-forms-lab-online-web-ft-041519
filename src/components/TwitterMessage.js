import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = ({
      tweet: ""
    });
  }

  handleState = (e) => {
    this.setState({
      tweet: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"  onChange={this.handleState} value={this.state.tweet}/>
        <strong>Characters remainings: {this.props.maxChars - this.state.tweet.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
