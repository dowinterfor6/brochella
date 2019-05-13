import { connect } from 'react-redux';
import { fetchOwnGroups } from '../../actions/group_actions';
import { logout } from '../../actions/session_actions';
import GroupIndex from './group_index';

const mapStateToProps = (state) => {
  return {
    // currentUser: , 
    // posts: Object.keys(state.entities.groups).map(id => state.entities.groups[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOwnGroups: (userId) => dispatch(fetchOwnGroups(userId)), 
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);