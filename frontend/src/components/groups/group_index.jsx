import React from 'react';
import GroupIndexItem from './group_index_item';


class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchUserGroups(this.props.currentUser.id)
      .then(
        (res) => {
          res.groups.map((group) => (
            this.setState({ [group._id]: group })
          ))
        }
      )
  }

  render() {
    let groups = [];
    let loading = '';
    if (Object.values(this.state).length !==0) {
      groups = Object.values(this.state).map((group) => {
        return (
          <GroupIndexItem
            key={group._id}
            group={group}
          />
        )
      });
    } else {
      loading = 'LOADING';
    };


    return (
      <div>
        <div className="loading-screen">
          { loading }
        </div>
        <ul> 
          { groups.reverse() }
        </ul>
      </div>
    )
  }
}

export default GroupIndex;