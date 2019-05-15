import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { createGroup } from '../../../actions/group_actions';
import { Redirect } from 'react-router-dom';


class CreateGroupContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      owner: this.props.currentUser,
      members: [this.props.currentUser]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const group = Object.assign({}, this.state)
    this.props.createGroup(group)
      .then(this.props.closeModal)
      .then(() => {(
        <Redirect to={`/groups/${group.id}`} />
      )});
  }
  
  update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  render() {

    return (
      <div className="session-form-modal"
        onClick={(e) => e.stopPropagation() }
        >
        <form>
          <label>Name
            <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  maxLength="30"  />
          </label>
          <input type="submit"
                onClick={this.handleSubmit}
                />
        </form>
      </div>
    );

  }
}



const mstp = state => {
  return {
    currentUser: state.session.user
  };
};

const mdtp = dispatch => {
  return {
    createGroup: group => dispatch(createGroup(group)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mstp, mdtp)(CreateGroupContainer);