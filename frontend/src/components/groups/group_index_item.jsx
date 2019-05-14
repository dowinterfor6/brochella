import React from 'react';

const GroupIndexItem = (props) => {
  return (
    <li className='group-index-item'> 
      <div className='group-index-name'>{props.group.name}</div>
      <div className='group-index-acts'>Acts: {props.group.acts}</div>
    </li>
  )
};

export default GroupIndexItem;