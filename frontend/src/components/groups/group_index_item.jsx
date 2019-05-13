import React from 'react';

const GroupIndexItem = (props) => {
  return (
    <div> 
      <div> {this.props.group.name} </div>
      <div>{this.props.group.owner}</div>
      <div>{this.props.group.members}</div>
      <div>{this.props.group.acts}</div>
    </div>
  )
};

export default GroupIndexItem;