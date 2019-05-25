import React from 'react';
import { connect } from 'react-redux';

class ActIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
}

const mstp = (state, ownProps) => {
    let act = state.acts[ownProps.match.params.actId]
    return {

    };
};

const mdtp = dispatch => {
    return {

    };
};

export default connect(mstp, mdtp)(ActIndexItem);
