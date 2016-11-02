import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Home from '../pages/Home.jsx';

const stateToProps = () => ({});

class App extends React.Component {
    renderNestedContent() {
        return <Home />;
    }

    render() {
        return (
            <Home />
        );
    }
}


App.propTypes = {
    children: PropTypes.object,
    currentLanguage: PropTypes.object,
    location: PropTypes.object
};

App.defaultTypes = {
    children: null,
    currentLanguage: { locale: 'en' }
};

export default connect(stateToProps)(App);
