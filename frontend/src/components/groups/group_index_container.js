import { connect } from 'react-redux';
// import { fetchOwnGroups } from '../../actions/group_actions';
import { logout } from '../../actions/session_actions';
import GroupIndex from './group_index';

const mapStateToProps = (state) => {
  return {
    posts: Object.keys(state.groups).map(id => state.groups[id]),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchOwnGroups: (userId) => dispatch(fetchOwnGroups(userId)), 
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);