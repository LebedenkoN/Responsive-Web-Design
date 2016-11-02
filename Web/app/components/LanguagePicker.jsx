import React, { PropTypes } from 'react';
import noop from 'lodash/noop';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/language-actions';
import { getCurrentLanguage } from '../selectors/index';
import { translate } from 'react-translate';

const stateToProps = state => ({
    currentLanguage: getCurrentLanguage(state)
});

const actionsToProps = dispatch => ({
    changeLang: e => dispatch(changeLanguage(e.target.value))
});

const LanguagePicker = ({ t, changeLang }) => (
    <div>
        {t('header')}
        <select onChange={changeLang}>
            <option value="en">en</option>
            <option value="fr">ua</option>
        </select>
    </div>
);

LanguagePicker.propTypes = {
    strings: PropTypes.object,
    currentLanguage: PropTypes.string,
    changeLang: PropTypes.func,
    t: PropTypes.func
};

LanguagePicker.defaultProps = {
    currentLanguage: 'en',
    changeLang: PropTypes.func,
    t: noop,
    strings: {
        header: 'Choose a language'
    }
};

export default connect(stateToProps, actionsToProps)(translate('LanguagePicker')(LanguagePicker));
