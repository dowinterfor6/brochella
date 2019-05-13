import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/session_form.css';

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
    this.props.login(user)
      .then(() => this.props.closeModal);
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
      <div className="session-form-modal fadeInDown" onClick={(e) => e.stopPropagation()}>
        <h1>Login</h1>
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
            Password 
            <input 
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);