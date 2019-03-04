import {SET_SEARCHED_VALUE} from '../constants/actionTypes'

const SearchBarReducer = (state = '' , action) => {
    console.log(action)
    if(action.type === SET_SEARCHED_VALUE) {
        return action.payload
    }
    return state
}

export default SearchBarReducer;