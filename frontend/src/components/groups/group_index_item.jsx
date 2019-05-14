import React from 'react';

class GroupIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay(e) {
    let inFocusDisplay = document.getElementsByClassName('in-focus-header')[0];
    let groupName = e.currentTarget.childNodes[0].innerHTML;
    if (!inFocusDisplay.innerHTML.includes(groupName)) {
      inFocusDisplay.innerHTML = '';
      inFocusDisplay.innerHTML = groupName;
    }
    inFocusDisplay.classList.add('fadeIn');
  }
  
  render() {
    return (
      <li className='group-index-item' onClick={this.handleDisplay}> 
        <div className='group-index-name'>{this.props.group.name}</div>
      </li>
    )
  }
};

export default GroupIndexItem;