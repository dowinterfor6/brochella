import React from 'react';
import merge from 'lodash/merge';

class GroupIndexDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acts: {},
      activeGroup: null,
      currentBackground: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeGroup) {
      this.props.deleteActs().then(
        () => {
          this.setState({ acts: {} });
          this.setState({ currentBackground: {} });
          this.setState({ activeGroup: nextProps.activeGroup });
          let acts = nextProps.activeGroup.acts;
          acts.map((actId) => (
            this.props.fetchAct(actId).then(
              (res) => {
                let prevState = this.state.acts;
                let nextState = merge({}, prevState, { [res.act.data._id]: res.act.data });
                this.setState({ acts: nextState });
              }
            ).then(
              // () => {
              //   if (Object.keys(this.state.acts).length === this.state.activeGroup.acts.length) {
              //     let background = Object.values(this.state.acts)[0].url;
              //     console.log(background);
              //     let display = document.getElementsByClassName('in-focus-display')[0];
              //     if (background) {
              //       display.setAttribute('style', 
              //         `background: url('${background}');
              //         background-position: center;
              //         background-size: cover;`
              //       );
              //       this.setState({ currentBackground: background });
              //     } else {
              //       display.setAttribute('style', 
              //         `background: url('https://cdn.pixabay.com/photo/2015/07/10/17/53/cheers-839865_960_720.jpg');
              //         background-position: center;
              //         background-size: cover;`
              //       );
              //       this.setState({ currentBackground: '' });
              //     }
              //   }
              // }
            )
          ))
          document.getElementsByClassName('in-focus-header')[0].classList.add('fadeIn');
          document.getElementsByClassName('act-list-container')[0].classList.add('fadeIn');
        }
      )
    }
  }

  componentWillUnmount() {
    window.clearInterval(window);
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

    return (
      display
    )
  }
}

export default GroupIndexDisplay;