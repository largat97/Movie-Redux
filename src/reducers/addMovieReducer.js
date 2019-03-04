import {ADD_MOVIE} from '../constants/actionTypes'

const initialMovie = [
    { img: 'https://tikashop.poste.tn/uploads/billet/3885800fb35ec052464d17d56b6ce30c.jpeg', name: 'Dachra', description: '', rating : 3 },
    { img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Djinn_poster.jpg/215px-Djinn_poster.jpg', name: 'The djinn', description: '', rating : 5 },
    { img: 'http://horrorbuzz.com/wp-content/uploads/2017/05/17098419_420027174997364_1231611992480394207_n.jpg', name: 'Sucin', description: '', rating : 4 },
    
  ];

const AddMovieReducer = (state = initialMovie, action) => {
    if(action.type === ADD_MOVIE) {
        
         
        return state.concat(action.payload)
    }
    return state
}

export default AddMovieReducer