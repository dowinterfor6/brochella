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

  componentDidMount() {
    let component = document.getElementsByClassName('session-form-modal')[0];
    component.classList.add('fadeInDown');
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors })
  }

  componentWillUnmount() {
    this.props.deleteErrors();
    this.props.closeModal()
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
    this.props.signup(user, this.props.history)
      .then(() => {
        if (this.props.match.path.url === '/tweets') {
          return this.props.history.push('/tweets');
        }

        let component = document.getElementsByClassName('session-form-modal')[0];
        component.classList.add('shake');
      });
  }

  render() {
    return (
      <div
        className="session-form-modal"
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={(e) => {
          e.currentTarget.classList.remove('fadeInDown');
          e.currentTarget.classList.remove('shake');
        }}
      >
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username 
            {this.props.errors.username ? ` - ${this.props.errors.username}` : ''}
          <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label>
            Email
            {this.props.errors.email ? ` - ${this.props.errors.email}` : ''}
          <input
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label>
            Password
            {this.props.errors.password ? ` - ${this.props.errors.password}` : ''}
          <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <label>
            Confirm Password
            {this.props.errors.password2 ? ` - ${this.props.errors.password2}` : ''}
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