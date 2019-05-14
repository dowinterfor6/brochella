import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
import '../../assets/stylesheets/session_form.css';


//reminder to:
//import group_form, and
//make 'Create Group' swtich case (for the discover page for now, and group show page for later)
//make 'Edit Group' switch case (for the group show page)
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
      // case 'Create Group':
      // component = <CreateGroupContainer />
      // break;
      // case 'Edit Group':
      // component = <EditGroupContainer />
      // break;
      default:
      return null;
    }

    return (
      <div className="modal-background fadeIn" onClick={this.props.closeModal}>
        {component}
      </div>
    )
  }
}

export default Modal;