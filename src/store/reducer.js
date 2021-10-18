import * as actions from './actionTypes';

const defaultState = {
    counter:0,
    error:null
}

const reducer = (state = defaultState,action)=>{
    switch (action.type) {
      case actions.ADD_COUNT:
        return {
          ...state,
          counter:state.counter + 1
      };
      case actions.SUB_COUNT:
        return {
          ...state,
          counter:state.counter - 1 
        };
      default:
        return state;
    }
}

export default reducer;