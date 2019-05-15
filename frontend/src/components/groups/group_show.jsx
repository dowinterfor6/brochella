import React from 'react';
import Map from '../map/map';
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/group_show.css';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      group: {}
    };
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.id).then(
      (res) => { this.setState({ group: res.group.data })}
    );
  }

  render() {
    console.log(this.props);
    let memberList;
    let owner;
    let acts;
    let permButtons;
    if (this.state.group.members) {
      memberList = (
        <div className="group-member-list-container">
          <h3>Member List:</h3>
          <ul className="group-member-list">
            {this.state.group.members.map((member, idx) => (
              <li key={idx}>
                {member}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    if (this.state.group.owner) {
      owner = (
        <div className="owner-display">
          <h2>Created by: {this.state.group.owner}</h2>
        </div>
      )
    }
    if (this.state.group.acts && this.state.group.acts.length > 0) {
      acts = (
        <div className="group-acts-container">
          <h3>Acts List:</h3>
          <ul className="group-acts-list">
            {this.state.group.acts.map((act, idx) => (
              <li key={idx}>
                {act}
              </li>
            ))}
          </ul>
        </div>
      )
    }
    if (this.props.currentUser.id === this.state.group.owner) {
      permButtons = (
        <div className="group-show-nav-container">
          <button onClick={() => this.props.openModal('Edit Group')}>
            Edit Group
            </button>

          <button onClick={() => this.props.openModal('Delete Confirmation')}>
            Delete Group
            </button>
        </div>
      );
    }

    return(
      <div className='group-show-container'> 
        <div className="group-show-main">
          <div className="group-show-header">
            <h1>{this.state.group.name}</h1>
          </div>
          {owner}
          {memberList}
          {acts}
          {permButtons}
        </div>

        <aside className="map-container">
          <Map />
        </aside>
      </div>
    );
  }
};

export default GroupShow;