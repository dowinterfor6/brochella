import React from 'react';

class GroupShow extends React.Component {
  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  render() {
    return(
      <div> 
        
        <div> {this.props.group.name} </div>
        <div> {this.props.group.owner} </div>
        <div> {this.props.group.members} </div>
        <div> {this.props.group.acts} </div>
        <div> Discover related acts </div>

        {/* comment in when Edit Group Form Modal is done */}
        {/* <button onClick={() => this.props.openModal('Edit Group')}>
          Edit Group Details
        </button> */}

        <button onClick={() => this.props.deleteGroup(this.props.group.id)}>
          Delete Group
        </button>

      </div>
    );
  }
};

export default GroupShow;