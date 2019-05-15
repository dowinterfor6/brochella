import { createGroup } from '../../actions/group_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';


import React from 'react';

function DiscoverPage(props) {

    return (
        <div>
            <h1>This is the discovery page!</h1>
            <button onClick={() => {
                props.openModal(props.formType)
            }
            }>Create a Group</button>
        </div>
    );

}



const mstp = state => {
    return {
        formType: 'Create Group'
    };
};

const mdtp = dispatch => {
    return {
        createGroup: group => dispatch(createGroup(group)),
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mstp, mdtp)(DiscoverPage);
