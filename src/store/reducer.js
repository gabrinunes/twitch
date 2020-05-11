const initialState ={stream:[],loading:null}

export default (state = initialState,action)=>{
    switch(action.type){
        case 'SET_STREAM':
            return {...state,stream:action.payload}
          
    }switch(action.type){
        case 'SET_LOADING':
            return{...state,loading:action.payload}
        default:
          return state
    }
}