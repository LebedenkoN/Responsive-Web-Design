import ResourceApi from 'common/resource-client';
import { createAction } from 'redux-actions';

export const addIngredintsSuccess = createAction('ADD_INGREDIENTS');
const getRecieptsSuccess = createAction('GET_RECIEPTS');

export const getReciepts = (ingredients) => {
    const action = (dispatch, getState) => {
        let url = 'http://www.recipepuppy.com/api/?i=';
        url = ingredients.reduce((prev, cur) => prev + cur + ',', url);
        url = url.slice(0, url.length - 1);
        url += '&q&p=1';
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                const response = JSON.parse(xhttp.responseText);
                if (response) {
                    const reciepts = response.results;
                    dispatch(getRecieptsSuccess(reciepts));
                }
            }
        };
        xhttp.open('GET', url, true);
        xhttp.send();
        return true;
    };
    return action;
};
