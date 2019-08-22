import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target
    this.setState({
      username: event.target.value,
      password: event.target.value
    });
  }

  callLogin = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) {

    } else {
      return this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={ this.callLogin }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.value} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
