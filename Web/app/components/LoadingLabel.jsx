import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const stateToProps = (state) => (
    { progress: state.actionStatus.progressMessages }
);

class LoadingLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: [],
            awaiting: false
        };
        this.renderContent = this.renderContent.bind(this);
        this.startDelayTimer = this.startDelayTimer.bind(this);
        this.stopDelayTimer = this.stopDelayTimer.bind(this);
        this.handleDelayTimeout = this.handleDelayTimeout.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.progress.length > 0) {
            this.startDelayTimer();
        } else {
            this.stopDelayTimer();
        }
    }

    componentWillUnmount() {
        this.stopDelayTimer();
    }

    startDelayTimer() {
        if (this.delayTimer === undefined) {
            this.setState({ awaiting: true });
            this.delayTimer = setTimeout(this.handleDelayTimeout, 500);
        }
    }

    stopDelayTimer() {
        if (this.delayTimer !== undefined) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }

    handleDelayTimeout() {
        this.setState({ awaiting: false });
        this.delayTimer = undefined;
    }

    progressActive = <div id="fountainG">
        <div id="fountainG_1" className="fountainG"></div>
        <div id="fountainG_2" className="fountainG"></div>
        <div id="fountainG_3" className="fountainG"></div>
        <div id="fountainG_4" className="fountainG"></div>
        <div id="fountainG_5" className="fountainG"></div>
        <div id="fountainG_6" className="fountainG"></div>
        <div id="fountainG_7" className="fountainG"></div>
        <div id="fountainG_8" className="fountainG"></div>
    </div>;

    progressHidden = false;

    delayTimer = undefined;

    renderContent() {
        if (this.props.progress.length === 0 || this.state.awaiting) {
            return this.progressHidden;
        }
        return this.progressActive;
    }

    render() {
        return this.renderContent();
    }
}

LoadingLabel.propTypes = {
    progress: PropTypes.array
};

LoadingLabel.defaultProps = {
    progress: []
};

export default connect(stateToProps)(LoadingLabel);
