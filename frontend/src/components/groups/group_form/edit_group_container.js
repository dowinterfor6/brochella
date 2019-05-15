import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup, updateGroup } from '../../../actions/group_actions';
import { closeModal } from '../../../actions/modal_actions';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.group;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ group: this.props.group }); 
  }

  componentWillUnmount() {
    //delete errors
    this.props.closeModal();
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const group = Object.assign({}, this.state);
    this.props.updateGroup(group).then(this.props.closeModal);
  };

  render() {
    return (
      <div className="session-form-modal"
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={(e) => {
          e.currentTarget.classList.remove('fadeInDown');
          e.currentTarget.classList.remove('shake');
        }}
      >

        Hey Hi Ho ~this is the Group form :p 
        <form onSubmit={this.handleSubmit}>
          <label>
            Name ya Group: 
            <input type="text" value={this.state.name} onChange={this.update('name')} />
          </label>
          <input type="submit" value="Submit Group" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    group: state.groups.data,
    formType: 'Edit Group',
    //add key-value to show errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroup: (id) => dispatch(fetchGroup(id)),
    updateGroup: (group) => dispatch(updateGroup(group)),
    closeModal: () => dispatch(closeModal()),
    //add deleteErrors for creating groups
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);