import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './group_form';
import { fetchGroup, updateGroup } from '../../../actions/group_actions';

class EditGroupForm extends React.Component {
  componentDidMount() {
    this.props.updateGroup(this.props.match.params.groupId)
  }

  render() {
    const { group, formType, updateGroup } = this.props;
    return (
      <GroupForm
        group={group}
        formType={formType}
        updateGroup={updateGroup}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    group: state.groups[ownProps.match.params.groupId],
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
)(EditGroupForm);