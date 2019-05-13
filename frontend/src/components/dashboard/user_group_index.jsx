import React from 'react';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  compoenntDidMount() {
    this.props.fetchOwnGroups();
  }

  render() {
    return (
      <div> </div>
    )
  }
}

export default UserIndex;