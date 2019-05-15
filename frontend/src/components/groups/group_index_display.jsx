import React from 'react';
import merge from 'lodash/merge';
import {withRouter} from 'react-router-dom';

class GroupIndexDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acts: {},
      activeGroup: null,
      backgroundUrl: ''
    };

    this.handleNavigation = this.handleNavigation.bind(this);
  }

  componentDidMount() {
    this.setBackgroundUrl();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeGroup) {
      this.props.deleteActs().then(
        () => {
          this.setState({ activeGroup: nextProps.activeGroup });
          this.setState({ acts: {} });
          let acts = nextProps.activeGroup.acts;
          if (acts.length > 0) {
            acts.map((actId) => (
              this.props.fetchAct(actId).then(
                (res) => {
                  let prevState = this.state.acts;
                  let nextState = merge({}, prevState, { [Date.parse(res.act.data.date)]: res.act.data });
                  this.setState({
                    acts: nextState
                  })
                }
              )
            ));
          };
          document.getElementsByClassName('in-focus-header')[0].classList.add('fadeIn');
          document.getElementsByClassName('act-list-container')[0].classList.add('fadeIn');
        }
      )
    }
  }

  handleNavigation(e) {
    if (this.props.activeGroup) {
      this.props.history.push(`/groups/${this.props.activeGroup.id}`);
    }
  }

  setBackgroundUrl(firstActId) {
    let displayElement = document.getElementsByClassName('in-focus-display')[0];
    if (displayElement) {
      if (firstActId) {
        displayElement.setAttribute('style',
          `background: url('${this.state.acts[firstActId].url}');
          background-position: center;
          background-size: cover;`
        );
      } else {
        displayElement.setAttribute('style',
          `background: url('https://cdn.pixabay.com/photo/2015/07/10/17/53/cheers-839865_960_720.jpg');
          background-position: center;
          background-size: cover;`
        );
      }
    }
    
  }

  render() {
    let display = (
      <div 
        className='in-focus-display fadeIn' 
        onAnimationEnd={(e) => e.currentTarget.classList.remove('fadeIn')}
        onClick={this.handleNavigation}
      >
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
        <div 
          className='in-focus-display active fadeIn' 
          onAnimationEnd={(e) => e.currentTarget.classList.remove('fadeIn')}
          onClick={this.handleNavigation}
        >
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

    if (Object.keys(this.state.acts).length > 0) {
      let firstActId = Object.keys(this.state.acts).sort()[0];
      this.setBackgroundUrl(firstActId);
    } else {
      this.setBackgroundUrl();
    };

    return (
      display
    )
  }
}

export default withRouter(GroupIndexDisplay);