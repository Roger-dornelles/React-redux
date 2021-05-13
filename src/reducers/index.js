import { combineReducers } from 'redux';

import UsuarioReducer from './UsuarioReducer';

export default combineReducers({
    user:UsuarioReducer
});