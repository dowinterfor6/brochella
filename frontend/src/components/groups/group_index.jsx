import React from 'react';
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/group_index.css';
import Loading from '../loading/loading';
import GroupIndexDisplay from './group_index_display';

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activePanel: null
    };

    this.handleDisplay = this.handleDisplay.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserGroups(this.props.currentUser.id)
      .then(
        (res) => {
          Object.values(res.groups).map((groupId) => (
            this.props.fetchGroup(groupId).then(
              (res) => {
                this.setState({ [groupId]: res.group.data })
              }
            )
          ));
          // Emulate long loading screen
          // window.setTimeout(() => (this.setState({ loading: false })), 10000); 
          this.setState({ loading: false });
        }
      )
  }

  handleDisplay(e) {
    console.log(e.currentTarget.innerHTML);
    console.log(e.currentTarget.classList[1]);
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    };
    let groups = [];
    if (Object.values(this.state).length > 2) {
      groups = Object.keys(this.state).map((group_id) => {
        if (group_id !== 'loading' && group_id !=='activePanel') {
          return (
            <li 
              key={group_id} 
              className={`group-index-item ${group_id}`}
              onClick={this.handleDisplay}
            > 
              {this.state[group_id].name}
            </li>
          )
        }
        return undefined;
      });
    } 

    return (
      <div className='group-index-container'>
        <GroupIndexDisplay />
        <ul className='group-index-viewer'> 
          { groups.reverse() }
        </ul>
      </div>
    )
  }
}

export default GroupIndex;