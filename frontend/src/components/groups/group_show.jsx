import React from 'react';
import Map from '../map/map';

class GroupShow extends React.Component {
  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.id);
  }

  render() {

    return(
      <div> 
        <Map />

        <button onClick={() => this.props.openModal('Edit Group')}>
          Edit Group
        </button>

        <button onClick={() => this.props.deleteGroup(this.props.group.id)}>
          Delete Group
        </button>

        <div> Discover related acts </div>
      </div>
    );
  }
};

export default GroupShow;