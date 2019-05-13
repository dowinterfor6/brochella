import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';

class Modal extends React.Component {
  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal.modal) {
      case 'signup':
      component = <SignupFormContainer />
      break;
      case 'login':
      component = <LoginFormContainer />
      break;
      default:
      return null;
    }

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        {component}
      </div>
    )
  }
}

export default Modal