/* eslint-disable no-unreachable */
const initialState = {
    name:'Visitante',
    email:'',
    password:'',
    logged:false

};

const UsuarioReducer = (state = initialState, action) =>{

    switch(action.type){
        case "GET_EMAIL":
            return { ...state, email:action.payload.email };
        break;

        case "GET_PASSWORD":
            return { ...state, password:action.payload.password};
        break;
        
        case "SET_LOGGED":
            return { ...state, logged: action.payload.logged };
        break;

        default:
        
    }
    return state;
};

export default UsuarioReducer;
