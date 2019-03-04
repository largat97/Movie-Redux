import React, { Component } from 'react';
import Card from './Card';
import SearchBarContainer from './Search';
import AddCardContainer from './AddMovie';
import Rating from './RatingSearch'
import { connect } from 'react-redux';
import './Container.css'




class Container extends Component {
    render() {
        return (
            <div >
                <SearchBarContainer />
                <Rating number={this.props.minRatingFilter} />
                <AddCardContainer />
                <div className="movies">
                    {this.props.movieList.filter(
                        el =>
                            el.name
                                .toLowerCase()
                                .includes(this.props.searched.toLowerCase())
                            &&
                            (el.rating >= this.props.minRatingFilter)
                    )

                        .map((movie, i) => (
                            <Card key={i} movie={movie} />
                        ))}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        searched: state.searched_Value,
        minRatingFilter: state.minRatingFilter,
        movieList: state.movieList
    }
}

const MainContainer =
    connect(mapStateToProps, null)(Container)

export default MainContainer;

