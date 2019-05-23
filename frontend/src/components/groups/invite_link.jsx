import React from 'react';

const InviteLink = (props) => {
  let groupNameParse = props.group.name.toLowerCase();
  groupNameParse = groupNameParse.match(/[a-zA-Z]+/g).join('');
  let inviteLink = groupNameParse + '_invite/' + props.group.id;

  return (
    <div className="delete-form-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="delete-header">Invite link</h1>
      <p className="create-message">Share this link with your friends to join the group!</p>
      <form>
        <input type="text"
          className="create-input"
          maxLength="30" 
          readOnly
          value={inviteLink}  
        />
        <button className="create-button">
          Copy
        </button>
      </form>
    </div>
  )
}

export default InviteLink;