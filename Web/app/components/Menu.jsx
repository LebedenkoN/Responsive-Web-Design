import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { translate } from 'react-translate';
import { signOut } from '../actions/auth-actions';
import { connect } from 'react-redux';

/* eslint-disable max-len*/
const collapsedStyles = {
    togleStyles: 'custom-menu-toggle',
    tuckedMenuStyles: 'pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked'
};

const expandedStyles = {
    togleStyles: 'custom-menu-toggle x',
    tuckedMenuStyles: 'pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom'
};

const actionsToProps = dispatch => ({
    logOut: () => dispatch(signOut())
});
const stateToProps = () => ({
});

/* eslint-enable max-len*/
@translate('Menu')
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuExpanded: false,
            togleStyles: collapsedStyles.togleStyles,
            tuckedMenuStyles: collapsedStyles.tuckedMenuStyles
        };
        this.onTogleClick = this.onTogleClick.bind(this);
    }

    onTogleClick() {
        if (this.state.isMenuExpanded) {
            this.setState({
                isMenuExpanded: false,
                togleStyles: collapsedStyles.togleStyles,
                tuckedMenuStyles: collapsedStyles.tuckedMenuStyles
            });
        } else {
            this.setState({
                isMenuExpanded: true,
                togleStyles: expandedStyles.togleStyles,
                tuckedMenuStyles: expandedStyles.tuckedMenuStyles
            });
        }
    }

    render() {
        /* eslint-disable max-len */
        return (
            <div className="custom-menu-wrapper">
                <div className="pure-menu custom-menu custom-menu-top">
                    <a href="#" className="pure-menu-heading custom-menu-brand">{this.props.t('header')}</a>
                    <a href="#" className={this.state.togleStyles} id="toggle" onClick={this.onTogleClick}>
                        <s className="bar"></s><s className="bar"></s>
                    </a>
                </div>
                <div className={this.state.tuckedMenuStyles} id="tuckedMenu">
                    <div className="custom-menu-screen"></div>
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item">
                            <Link className="pure-menu-link" to="/">
                                {this.props.t('homeLink')}
                            </Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link className="pure-menu-link" to="/table">
                                {this.props.t('tableLink')}
                            </Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link className="pure-menu-link" to="/form">
                                {this.props.t('formLink')}
                            </Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link className="pure-menu-link" to="/about">
                                {this.props.t('aboutLink')}
                            </Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link className="pure-menu-link" onClick={this.props.logOut} to="/">
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            );
    }
    /* eslint-enable max-len */
}
Menu.propTypes = {
    t: PropTypes.func,
    logOut: PropTypes.func
};

Menu.defaultProps = {
    t: () => {},
    logOut: () => {}
};

export default connect(stateToProps, actionsToProps)(Menu);
