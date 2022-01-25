import types from './artwork.types';

const initial_state ={
    is_send_invitation: false,
    lastform :{}
}

const artworkReducer = (state = initial_state , {type , payload})=> {
    switch(type){
        
        case types.ARTWORK_FORM :
            console.log("payload=>" , payload);
            return {
                ...state,
                lastform : payload ,
            }
            
        default :
        return state;
    }
}

export default artworkReducer;