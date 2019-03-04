import { ADD_MOVIE } from "../constants/actionTypes";
import { SET_RATING_FILTER } from "../constants/actionTypes";
import { SET_SEARCHED_VALUE } from "../constants/actionTypes";

export function addMovie(payload) {
    return { type: ADD_MOVIE, payload };
}

export function setRatingFilter(payload) {
    return { type: SET_RATING_FILTER, payload };
}

export function SearchedValue(payload) {
    return { type: SET_SEARCHED_VALUE, payload };
}