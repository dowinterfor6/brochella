import React from 'react';

const GroupIndexItem = (props) => {
  return (
    <li> 
      <div>Name: {props.group.name}</div>
      <div>Owner: {props.group.owner}</div>
      <div>Members: {props.group.members}</div>
      <div>Acts: {props.group.acts}</div>
    </li>
  )
};

export default GroupIndexItem;