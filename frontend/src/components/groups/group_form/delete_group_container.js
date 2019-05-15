import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { deleteGroup } from '../../../actions/group_actions';


function DeleteForm(props) {

    const { deleteGroup, group } = props;

    return (
      <div className="session-form-modal"
        onClick={(e) => e.stopPropagation() }
        >
        <form>
          <input type="submit"
                onClick={() => deleteGroup(group).then(closeModal)}
                ></input>
        </form>
      </div>
    );

}



const mstp = state => {
  return {
    group: state.groups.data
  };
};

const mdtp = dispatch => {
  return {
    deleteGroup: group => dispatch(deleteGroup(group)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mstp, mdtp)(DeleteForm);