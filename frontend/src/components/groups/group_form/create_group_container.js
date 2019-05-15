import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions';
import { createGroup } from '../../../actions/group_actions';


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
      .then(
        (res) => {
          this.props.closeModal();
          this.props.history.push(`/groups/${res.group.data.id}`);
        }
      )
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
          <button onClick={this.handleSubmit}> 
            Create group
          </button>
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

export default connect(mstp, mdtp)(withRouter(CreateGroupContainer));
