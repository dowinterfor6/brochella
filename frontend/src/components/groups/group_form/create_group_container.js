import { connect } from 'react-redux';
import GroupForm from './group_form';
import { createGroup } from '../../../actions/group_actions';

const mapStateToProps = (state) => {
  return {
    formType: 'Create Group', 
    currentUser: state.session.user.username,
    //add key-value to show errors

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGroup: (group) => dispatch(createGroup(group)),
    closeModal: () => dispatch(closeModal()),
    //add deleteErrors for creating groups
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);