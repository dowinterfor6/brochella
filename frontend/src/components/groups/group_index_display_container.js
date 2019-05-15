import { connect } from 'react-redux';
import GroupIndexDisplay from './group_index_display';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActs: (actId) => dispatch(fetchActs(actId)),
    deleteActs: (actId) => dispatch(fetchActs(actId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GroupIndexDisplay);