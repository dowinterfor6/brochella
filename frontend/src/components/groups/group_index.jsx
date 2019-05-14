import React from 'react';
import GroupIndexItem from './group_index_item';
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/group_index.css';

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchUserGroups(this.props.currentUser.id)
      .then(
        (res) => {
          // res.groups.map((group) => (
          //   this.setState({ [group._id]: group })
          // ))
          Object.values(res.groups).map((groupId) => (
            this.props.fetchGroup(groupId).then(
              (res) => {
                this.setState({ [groupId]: res.group.data })
              }
            )
          ));
          this.setState({ loading: false });
        }
      )
  }

  render() {
    let groups = [];
    let loading;
    if (Object.values(this.state).length !==1) {
      groups = Object.keys(this.state).map((group_id) => {
        return (
          <GroupIndexItem
            key={group_id}
            group={this.state[group_id]}
          />
        )
      });
    } 
    if (this.state.loading) {
      loading = (
        <div className='loading-screen'>
          <div className="loading-status">
            LOADING
          </div>
        </div>
      )
    };

    return (
      <div className='group-index-container'>
        { loading }
        <div className='in-focus-display'>
          <div className="in-focus-header">
            Browse through your groups and click to show details! 
            Or, check out the discover page and
            create your own to get started!
          </div>
          <div className="in-focus-act">
          
          </div>
        </div>
        <ul className='group-index-viewer'> 
          { groups.reverse() }
        </ul>
      </div>
    )
  }
}

export default GroupIndex;