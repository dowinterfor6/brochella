import { connect } from 'react-redux';
import { fetchGroup, updateGroup, deleteGroup } from '../../actions/group_actions';
import { openModal } from '../../actions/modal_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => {
  return ({
    group: state.groups[ownProps.match.params.groupId]
  })
};

const mapDispatchToProps = (dispatch) => { 
  return ({
    fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
    updateGroup: (group) => dispatch(updateGroup(group)),
    deleteGroup: (id) => dispatch(deleteGroup(id)), 
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);