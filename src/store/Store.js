// import {createStore, combineReducers} from 'redux';
// import {ADD_MOVIE} from '../ActionType'
// import {SEARCHED_VALUE} from '../ActionType'

// const initialMovie = [
//     { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'beirut', description: '', rating : 3 },
//     { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'bladerunner', description: '', rating : 4 },
//     { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'starWars', description: '', rating : 3 },
//     { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'tallengeHollywood', description: '', rating : 3 },
//     { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'teenwolf', description: '', rating : 5 }
//   ];

//  export const AddMovieReducer = (state = initialMovie, action) => {
//     if(action.type === ADD_MOVIE) {
//         return state.concat(action.payload)
//     }
//     return state
// }



// export const SearchBarReducer = (state = '' , action) => {
//     console.log(action)
//     if(action.type === SEARCHED_VALUE) {
//         return action.payload
//     }
//     return state
// }

// const store = createStore(combineReducers({
//     searched_Value: SearchBarReducer,
//     movieList: AddMovieReducer

// }),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;



import { createStore, combineReducers } from 'redux';
import RatingFilterReducer from '../reducers/ratingFilterReducer';
import SearchBarReducer from '../reducers/searchBarReducer'
import AddMovieReducer from '../reducers/addMovieReducer'

const store = createStore(combineReducers({
    searched_Value: SearchBarReducer,
    minRatingFilter: RatingFilterReducer,
    movieList: AddMovieReducer

}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


console.log(store.getState());
export default store;