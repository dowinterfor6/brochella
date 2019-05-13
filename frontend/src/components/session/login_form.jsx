import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user);
  }

  renderErrors() {
    return(
      <ul>
        {Object.values(this.state.errors).map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.update('username')}
              placeholder="Username"
            />
          </label>
          <label>
            Password 
            <input 
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
          </label>
          <button>Submit</button>
          {this.renderErrors()}
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);