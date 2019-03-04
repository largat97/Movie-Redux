import React  from 'react';
import {connect} from 'react-redux';
import './StarRating.css'
import { setRatingFilter } from '../actions/action';

function Rating ({number, setRatingFilter}) {
    const star =[];
    for (let index = 0; index < 5 ; index++) {
        if (index<number){
            star.push(<a onClick={() => setRatingFilter(index+1)}><i class="fas fa-star star" ></i></a>) 
        }
        else{star.push(<a onClick={() => setRatingFilter(index+1)}><i class="fas fa-star"></i></a>) }
    }
    return star;
}

const mapDispatchToProps = dispatch => {
    return {
        setRatingFilter: (star) => {
        dispatch(setRatingFilter(star));
      }
    }
}

export default connect(null, mapDispatchToProps)(Rating)