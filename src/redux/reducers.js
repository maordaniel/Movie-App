import { combineReducers } from 'redux';
import auth_reducers from './reducers/auth_reducers'
import main_reducers from './reducers/main_reducers';

export default combineReducers({
    auth_reducers,
    main_reducers
});
