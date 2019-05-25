import React from 'react';
import { connect } from 'react-redux';
import { fetchAct } from '../../actions/act_actions';
import '../../assets/stylesheets/reset.css';

class ActIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.fetchAct(this.props.id);
    }

    render() {

        return (
            <div>
                This is the page for!
            </div>
        )

    }
}

const mstp = (state, ownProps) => {
    let id = ownProps.match.params.actId;
    return {
        id
    };
};

const mdtp = dispatch => {
    return {
        fetchAct: id => dispatch(fetchAct(id))
    };
};

export default connect(mstp, mdtp)(ActIndexItem);
