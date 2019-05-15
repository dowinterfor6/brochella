import { createGroup } from '../../actions/group_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import '../../assets/stylesheets/discover.css';
import React from 'react';
import { fetchActs } from '../../actions/act_actions';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchActs().then(
      (res) => {
        res.acts.map((act) => (
          this.setState({ [act._id]: act })
        ))
      }
    )
  }

  parseDate(date) {
    let newDate;
    let newTime;
    let dateArr = date.split('T');
    newDate = dateArr[0];
    let timeArr = dateArr[1].split('Z');
    newTime = timeArr[0].split('.')[0];
    return newDate + ' ' + newTime
  }

  render() {
    let acts = (
      Object.values(this.state).map((act, idx) => (
        <li className='discovery-index-item' key={idx}>
          <h3>{act.name}</h3>
          <p>{this.parseDate(act.date)}</p>
          <img src={act.url} alt={act.name}/>
        </li>
      ))
    )

    return (
      <div className='discovery-container'>
        <div className="discovery-header">
          <h1>This is the discovery page!</h1>
          <button onClick={() => {
              this.props.openModal(this.props.formType)
          }
          }>Create a Group</button>
        </div>
        
        <ul className="act-list">
          {acts}
        </ul>
      </div>
    );
  }

}

const mstp = state => {
  return {
    formType: 'Create Group'
  };
};

const mdtp = dispatch => {
  return {
    createGroup: group => dispatch(createGroup(group)),
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    fetchActs: () => dispatch(fetchActs())
  };
};

export default connect(mstp, mdtp)(DiscoverPage);
