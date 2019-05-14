import { createGroup } from '../../actions/group_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';


import React from 'react';

class DiscoverPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>This is the discovery page!</h1>
                <button onClick={() => {
                    this.props.openModal(this.props.formType)
                }
                }>Create a Group</button>
            </div>
        );

    }

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
