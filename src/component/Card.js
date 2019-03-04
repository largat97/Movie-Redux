import React , {Component} from 'react';

 import './Card.css';
 import Rating from './RatingSearch'


class Card extends Component {

    
    render() {
        return (

            <div className="card">
                <img  src={this.props.movie.img} alt="Avatar" style={{ width: '100%' }} />

                <div className="container">
                    <h4><b>{this.props.movie.name}</b></h4>
                    <Rating number={this.props.movie.rating}/>
                </div>
            </div>
        )

    }

}
export default Card;
