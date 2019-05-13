const UserGroupIndexItem = (props) => {
  reuturn (
    <div> 
      <div> Group details</div>

      <button onClick={() => props.updateGroup(props.group.id)}>
      Edit Group 
      </button>
      
      <button onClick={() => props.deleteGroup(props.group.id)}>
      DeleteGroup
      </button>

    </div>
  )
};

export default UserGroupIndexItem;