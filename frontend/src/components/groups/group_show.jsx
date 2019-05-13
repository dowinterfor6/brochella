import React from 'react';

class GroupShow extends React.Compoennt {
  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  render() {
    return(
      <div> 
        
        <div> group name </div>
        <div> group acts </div>
        <div> group admin </div>
        <div> group members </div>
        <div> discover related acts </div>

        <button onClick={() => this.props.openModal('Edit Group')}>
          Edit Group Details 
        </button>

        <button onClick={() => props.deleteGroup(props.group.id)}>
          Delete Group
        </button>

      </div>
    );
  }
};

export default GroupShow;