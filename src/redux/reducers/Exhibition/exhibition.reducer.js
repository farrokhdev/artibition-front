import types from './exhibition.types';

const initial_state ={
    is_send_invitation: false,
    lastform :{}
}

const exhibitionReducer = (state = initial_state , {type , payload})=> {
    switch(type){
        
        case types.EXHIBITION_FORM :
            console.log("payload=>" , payload);
            return {
                ...state,
                lastform : payload ,
            }
            
        default :
        return state;
    }
}

export default exhibitionReducer;