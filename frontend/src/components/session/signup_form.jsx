import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/session_form.css';

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
      <div className="session-form-modal fadeInDown" onClick={(e) => e.stopPropagation()}>
        <h1>Sign up</h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
          <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label>
            Email
          <input
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label>
            Password
          <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <label>
            Confirm Password
          <input
              type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm);