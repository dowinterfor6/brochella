import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      owner: this.props.currentUser, //may not need this?? hmm
      members: [], 
      acts: []
    }

  }

  componentDidMount() {

  }

  componentWillUnmount() {
    //delete errors
    this.props.closeModal()
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    let owner;
    if (this.props.formType === "Create Group") {
      owner = <label>
        Owner of Group: 
        <input type="text"
          value={this.state.owner}
          onChange={this.update('owner')}
          />
        </label> 
    };

    return (
      <div>
        Hey Hi Ho ~this is the group form :p 
    
        {owner}
      </div>
    )
  }
}

export default withRouter(GroupForm);