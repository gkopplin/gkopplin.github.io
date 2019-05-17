import {RECEIVE_TABS, RECEIVE_TAB} from '../actions/tabs_actions.js';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    const oldState = Object.freeze(state);
    let newState;

    switch (action.type) {
        default:
            return oldState;
    }
};