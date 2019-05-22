import React from 'react';
import merge from 'lodash/merge';
import {withRouter} from 'react-router-dom';

class GroupIndexDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acts: {},
      activeGroup: null,
      backgroundUrl: 0
    };

    this.handleNavigation = this.handleNavigation.bind(this);
  }

  componentDidMount() {
    this.setBackgroundUrl();
    this.interval = setInterval(() => {
      this.setState({ backgroundUrl: this.state.backgroundUrl + 1 })
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeGroup) {
      this.props.deleteActs().then(
        () => {
          this.setState({ activeGroup: nextProps.activeGroup, acts: {} });
          let acts = nextProps.activeGroup.acts;
          if (acts.length > 0) {
            let newActs = {};
            acts.map((actId) => (
              this.props.fetchAct(actId).then(
                (res) => {
                  let prevActs = newActs;
                  newActs = merge({}, prevActs, { [Date.parse(res.act.data.date)]: res.act.data })
                  if (Object.keys(newActs).length === acts.length) {
                    this.setState({
                      acts: newActs,
                      backgroundUrl: 0
                    });
                  };
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

  setBackgroundUrl(actId) {
    let displayElement = document.getElementsByClassName('in-focus-display')[0];
    if (displayElement) {
      if (actId) {
        displayElement.classList.add('fadeIn');
        displayElement.setAttribute('style',
          `background: url('${this.state.acts[actId].url}');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;`
        );
      };
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
              {Object.keys(this.state.acts).sort().map((key) => (
                <li
                  key={key}
                >
                  {this.state.acts[key].name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }

    // if (Object.keys(this.state.acts).length > 0) {
    //   let firstActId = Object.keys(this.state.acts).sort()[0];
    //   this.setBackgroundUrl(firstActId);
    // } else {
    //   this.setBackgroundUrl();
    // };

    if (Object.keys(this.state.acts).length > 0) {
      let actId = Object.keys(this.state.acts).sort()[this.state.backgroundUrl % Object.keys(this.state.acts).length];
      this.setBackgroundUrl(actId);
    } else {
      this.setBackgroundUrl();
    };

    return (
      display
    )
  }
}

export default withRouter(GroupIndexDisplay);