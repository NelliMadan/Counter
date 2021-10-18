import * as actions from './actionTypes';

const defaultState = {
    counter:0,
    text:'Hello',
    tasks:[],
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
      case actions.GET_TASKS_SUCCESS:
        return {
          ...state,
          tasks:action.tasks
        };
      case actions.GET_TASKS_FAILURE:
        return {
          ...state,
          error:action.err
        };
      default:
        return state;
    }
}

export default reducer;