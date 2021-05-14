/* eslint-disable no-unreachable */
const initialState = {
    name:'Teste'
};

const UsuarioReducer = (state = initialState, action) =>{

    switch(action.type){
        case "USER_NAME":
            return { ...state, name:action.payload.name };
        break;

        default:
        
    }
    return state;
};

export default UsuarioReducer;