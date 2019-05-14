import React from 'react';

class GroupIndexDisplay extends React.Component {
  

  render() {

    return (
      <div className='in-focus-display'>
        <div className="in-focus-header" onAnimationEnd={(e) => e.currentTarget.classList.remove('fadeIn')}>
          Browse through your groups and click to show details!
          Or, check out the discover page and
          create your own to get started!
        </div>
        <div className="in-focus-act">

        </div>
      </div>
    )
  }
}

export default GroupIndexDisplay;