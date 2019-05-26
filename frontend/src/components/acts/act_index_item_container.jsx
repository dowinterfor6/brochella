import React from 'react';
import { connect } from 'react-redux';
import { fetchAct } from '../../actions/act_actions';
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/acts_show.css';

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

        if(!this.props.act) {
            return null;
        }

        return (
            <div className="acts-show-container">
                <h2>This is the page for <strong>{this.props.act.name}!</strong></h2>
            </div>
        )

    }
}

const mstp = (state, ownProps) => {
    let id = ownProps.match.params.actId;
    let act = state.acts[ownProps.match.params.actId];
    return {
        act,
        id
    };
};

const mdtp = dispatch => {
    return {
        fetchAct: id => dispatch(fetchAct(id))
    };
};

export default connect(mstp, mdtp)(ActIndexItem);
