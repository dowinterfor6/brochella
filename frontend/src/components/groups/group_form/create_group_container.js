import { connect } from 'react-redux';
import { createGroup } from '../../../actions/group_actions';
import { closeModal } from '../../../actions/modal_actions';
import GroupForm from './group_form';

const mapStateToProps = (state) => {
  return {
    group: {
      name: '',
      // members: [], //members are added after group is created by owner
      acts: []
    },
    formType: 'Create Group', 
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