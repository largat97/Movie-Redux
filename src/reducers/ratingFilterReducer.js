import {SET_RATING_FILTER} from '../constants/actionTypes'

const RatingFilterReducer = (state = 1, action) => {
    if(action.type === SET_RATING_FILTER) {
        return action.payload
    }
    return state
}

export default RatingFilterReducer