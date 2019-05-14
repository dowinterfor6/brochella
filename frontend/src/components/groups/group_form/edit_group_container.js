import { connect } from 'react-redux';
import GroupForm from './group_form';
import { updateGroup } from '../../../actions/group_actions';

const mapStateToProps = (state) => {
  return {
    formType: 'Edit Group',
    currentUser: state.session.user.username,
    //add key-value to show errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGroup: (group) => dispatch(updateGroup(group)),
    closeModal: () => dispatch(closeModal()),
    //add deleteErrors for creating groups
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);