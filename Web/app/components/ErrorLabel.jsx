import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-translate';
import { hideActionError } from '../actions/utility-actions';
import { getCurrentLanguageTranslation } from '../selectors/index';

const stateToProps = (state) => ({
    error: state.actionStatus.errorMessages,
    locale: getCurrentLanguageTranslation(state)
});
const actionsToProps = dispatch => ({
    hideError: () => {
        dispatch(hideActionError());
    }
});

const ErrorLabel = ({ t, hideError, error }) => (
    <div hidden={error.length === 0} className="content">
        {t('errMessage')}
        <button className="pure-button" onClick={hideError}>
            Hide error
        </button>
    </div>
);

ErrorLabel.propTypes = {
    error: PropTypes.array,
    t: PropTypes.func,
    hideError: PropTypes.func,
    locale: PropTypes.object
};

export default connect(stateToProps, actionsToProps)(translate('ErrorLabel')(ErrorLabel));
