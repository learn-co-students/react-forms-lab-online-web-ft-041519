import React from "react";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
//This component takes one prop: handleSubmit which is a function — this function is called when the form is being submitted
//The onSubmit callback prop should only be called if both fields are filled in (with any value).
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username != "" && this.state.password != "") {
      this.props.handleLogin(this.state);
    }
  }

//Make this a controlled component by adding the necessary attributes to these inputs.
//The input values should be saved to the component's state on every change
//Add the necessary event handler to the <form> element in order to call the onSubmit callback prop
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handleChange(event)} />
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
