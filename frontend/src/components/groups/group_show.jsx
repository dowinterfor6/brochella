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
    console.log(this.state);

    return(
      <div className='group-show-container'> 
        <div className="group-show-main">
          <div className="group-show-header">
            <h1>{this.state.group.name}</h1>
          </div>

          <div className="group-member-list-container">
            <ul className="group-member-list">
              
            </ul>
          </div>

          <div className="group-show-nav-container">
            <button onClick={() => this.props.openModal('Edit Group')}>
              Edit Group
            </button>

            <button onClick={() => this.props.openModal('Delete Confirmation')}>
              Delete Group
            </button>
          </div>
        </div>

        <aside className="map-container">
          <Map />
        </aside>
      </div>
    );
  }
};

export default GroupShow;