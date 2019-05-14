import React from 'react';

class GroupIndexDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acts: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    document.getElementsByClassName('in-focus-header')[0].classList.add('fadeIn');
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

        </div>
      </div>
    );

    if (this.props.activeGroup) {
      display = (
        <div className='in-focus-display'>
          <div className="in-focus-header fadeIn" onAnimationEnd={(e) => e.currentTarget.classList.remove('fadeIn')}>
            {this.props.activeGroup.name}
          </div>
          <div className="in-focus-act">
            {this.props.activeGroup.acts}
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