import React from 'react';
import UserGroupIndexItem from './group_index_item';


class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  compoenntDidMount() {
    this.props.fetchOwnGroups();
  }

  render() {
    let groups = this.props.users.groups.map(group => {
      return (
        <UserGroupIndexItem
          key={group.id}
          group={group}
        />
      )
    });

    return (
      <div> 
      { groups.reverse() }
      </div>
    )
  }
}

export default GroupIndex;