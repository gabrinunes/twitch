const initialState ={stream:[]}

export default (state = initialState,action)=>{
    switch(action.type){
        case 'SET_STREAM':
            return {...state,stream:action.payload}

        default:
          return state      
    }
}