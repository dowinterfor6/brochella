import React from 'react';
import GroupIndexItem from './group_index_item';


class GroupIndex extends React.Component {
  componentDidMount() {
    console.log(this.props.currentUser.id);
    // this.props.fetchOwnGroups(this.props.currentUser.id);
  }

  render() {
    let groups = [];
    if (this.props.users) {
      groups = this.props.users.groups.map(group => {
        return (
          <GroupIndexItem
            key={group.id}
            group={group}
          />
        )
      });
    };


    return (
      <div> 
      { groups.reverse() }
      </div>
    )
  }
}

export default GroupIndex;