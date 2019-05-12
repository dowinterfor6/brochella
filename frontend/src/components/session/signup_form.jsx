import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(this.state);
    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
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
        <h1>SIGN UP</h1>
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
            Email
            <input
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
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
          <label>
            Confirm Password
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm password"
            />
          </label>
          <button>Submit</button>
          {this.renderErrors()}
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm);