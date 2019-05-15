import React from 'react';
import merge from 'lodash/merge';

class GroupIndexDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acts: {},
      activeGroup: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeGroup) {
      this.props.deleteActs().then(
        () => {
          this.setState({ acts: {} });
          this.setState({ activeGroup: nextProps.activeGroup });
          let acts = nextProps.activeGroup.acts;
          acts.map((actId) => (
            this.props.fetchAct(actId).then(
              (res) => {
                let prevState = this.state.acts;
                let nextState = merge({}, prevState, { [res.act.data._id]: res.act.data });
                this.setState({ acts: nextState });
              }
            )
          ))
        }
      )
    }
    document.getElementsByClassName('in-focus-header')[0].classList.add('fadeIn');
    document.getElementsByClassName('act-list-container')[0].classList.add('fadeIn');
  }

  render() {
    let display = (
      <div className='in-focus-display'>
        <div className="in-focus-header fadeIn" onAnimationEnd={(e) => e.currentTarget.classList.remove('fadeIn')}>
          Browse through your groups and click to show details!
          Or, check out the discover page and
          create your own to get started!
        </div>
        <div className="in-focus-act">
          <ul className="act-list-container" onAnimationEnd={(e) => e.currentTarget.classList.remove('fadeIn')}>
          
          </ul>
        </div>
      </div>
    );

    if (this.state.activeGroup) {
      display = (
        <div className='in-focus-display'>
          <div className="in-focus-header fadeIn" onAnimationEnd={(e) => e.currentTarget.classList.remove('fadeIn')}>
            {this.state.activeGroup.name}
          </div>
          <div className="in-focus-acts">
            <ul className="act-list-container" onAnimationEnd={(e) => e.currentTarget.classList.remove('fadeIn')}>
              {Object.values(this.state.acts).map((act) => (
                <li
                  key={act._id}
                >
                  {act.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }

    console.log(this.state);

    return (
      display
    )
  }
}

export default GroupIndexDisplay;