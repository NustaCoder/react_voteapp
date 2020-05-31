import * as ActionTypes from './ActionTypes';


export const Leaders = (state = {
    isLoading: true,
    errmess: null,
    leaders: []},
    action) => {

    switch(action.type) {

        case ActionTypes.ADD_LEADER:
            return {...state, isLoading: false, errmess: null, leaders: action.payload}

            case ActionTypes.LEADER_LOADING:
                return {...state, isLoading: true, errmess: null, leaders: []}
                 
              case ActionTypes.LEADER_FAILED:
                return {...state, isLoading: false, errmess: action.payload, leaders: []}
        default:
        return state;   //default return is LEADERS
    }
}