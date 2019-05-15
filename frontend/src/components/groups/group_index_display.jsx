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
    this.setState(
      { backgroundUrl: 'https://cdn.pixabay.com/photo/2015/07/10/17/53/cheers-839865_960_720.jpg'}
    );
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
                  // console.log(res);
                  let prevState = this.state.acts;
                  let nextState = merge({}, prevState, { [res.act.data._id]: res.act.data });
                  this.setState({
                    backgroundUrl: res.act.data.url,
                    acts: nextState
                  })
                }
              )
            ));
          } else {
            this.setState({ 
              backgroundUrl: 'https://cdn.pixabay.com/photo/2015/07/10/17/53/cheers-839865_960_720.jpg' 
            });
          }
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

    let displayElement = document.getElementsByClassName('in-focus-display')[0];
    if (displayElement) {
      displayElement.setAttribute('style',
        `background: url('${this.state.backgroundUrl}');
        background-position: center;
        background-size: cover;`
      );
    }
    return (
      display
    )
  }
}

export default withRouter(GroupIndexDisplay);