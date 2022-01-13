import {
    CREATE_USER,
    FETCH_USERS,
    FETCH_USER,
    DELETE_USER,
    EDIT_USER,
    ADMIN_SIGN,
} from '../../types';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_USER:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_USER:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_USER:
            return { ...state, [action.payload.id]: action.payload };
        case ADMIN_SIGN:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_USER:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}