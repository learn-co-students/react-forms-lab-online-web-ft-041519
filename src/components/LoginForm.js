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
    console.log(`username: ${this.state.username}`)
    if (!this.state.username || !this.state.password) {
      return
    } else {
      this.props.handleLogin({ username: this.state.username, password: this.state.password })
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
