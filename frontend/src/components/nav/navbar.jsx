import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/navbar.css';
import ModalContainer from '../modal/modal_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <ul className='nav-bar-items-after-login'>
          <li>
            <Link to={'/tweets'}>All Tweets</Link>
          </li>
          <li>
            <Link to={'/profile'}>Profile</Link>
          </li>
          <li>
            <Link to={'/new_tweet'}>Write a Tweet</Link>
          </li>
          <li>
            <Link to={'/'} onClick={this.props.logout}>Logout</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='nav-bar-items-before-login'>
          <li>
            <Link to={'/tweets'}
              onClick={() => this.props.openModal('signup')}
            >
              Signup
            </Link>
          </li>
          <li>
            <Link to={'/tweets'}
              onClick={() => this.props.openModal('login')}
            >
            Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav className="nav-bar-container">
        <h1>Bro-chella</h1>
        { this.getLinks() }
        <ModalContainer />
      </nav>
    )
  }
}

export default NavBar;