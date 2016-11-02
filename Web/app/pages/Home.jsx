﻿import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { showActionError,
showActionProgress, hideActionProgress } from '../actions/utility-actions';

const stateToProps = state => ({
    ingredients: state.reciepts.ingredients,
    reciepts: state.reciepts.reciepts
});
const actionsToProps = (dispatch) => ({
    showError: () => {
        dispatch(showActionError('Home', 'Error message'));
    },
    showProgress: () => {
        dispatch(showActionProgress('Home', 'Error message bla-bla-bla'));
    },
    hideProgress: () => {
        dispatch(hideActionProgress('Home'));
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.ingredients = props.ingredients;
        this.state.reciepts = props.reciepts;
        this.state.newIngredient = '';
    }
    handleAddIngredient = () => {
        const ingredients = this.state.ingredients;
        ingredients.push(this.state.newIngredient);
        this.setState({ ingredients, newIngredient: '' });
    }
    handleNewInput = (e) => {
        const newIngredient = e.target.value;
        this.setState({ newIngredient });
    }
    handleDeleteIngredient = (e) => {
        const id = parseInt(e.target.value, 10);
        const oldIngredients = this.state.ingredients;
        let ingredients = oldIngredients.slice(0, id);
        ingredients = ingredients.concat(oldIngredients
            .slice(id + 1, oldIngredients.length));
        this.setState({ ingredients });
    }
    renderData = () => {
        const ingredients = this.state.ingredients.map((item) => (
            <div key={item}>
                {item}
                <button type="button" onClick={this.handleDeleteIngredient}
                  value={this.state.ingredients.indexOf(item)}
                >
                    -
                </button>
            </div>
        ));
        const reciepts = this.state.reciepts.map((item) => (
            <div>
                {item}
            </div>
        ));
        const newIngredient = this.state.newIngredient;
        return (
            <div>
                <input type="text" id="newIngredient" value={newIngredient}
                  onChange={this.handleNewInput}
                />
                <button type="button" onClick={this.handleAddIngredient}>+</button>
                <span>{ingredients}</span>
                <p>Reciepts:</p>
                <span>{reciepts}</span>
            </div>
        );
    }
    render() {
        return (
            <span>
                <div className="header">Hello Reciepts!</div>
                <div>{this.renderData()}</div>
            </span>
          );
    }
}

Home.propTypes = {
    t: PropTypes.func,
    showError: PropTypes.func,
    showProgress: PropTypes.func,
    hideProgress: PropTypes.func,
    ingredients: PropTypes.array,
    reciepts: PropTypes.array
};

export default connect(stateToProps, actionsToProps)(Home);
