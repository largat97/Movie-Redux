import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { addMovie } from '../actions/action';


class AddMovieComponent extends Component {

  movie = {
    'name': '',
    'img': '',
    'rating': 0
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }


  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }
    )
  }

  toggle() {
    this.setState(prevState =>
      (
        {
          modal: !prevState.modal
        }
      )
    );
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Add Movie</Button>
        <Modal isOpen={this.state.modal} 
        modalTransition={{ timeout: 0 }} 
        backdropTransition={{ timeout: 0 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add your Movie</ModalHeader>
          <ModalBody>

          </ModalBody>
          <label htmlFor="title" >Title</label>
          <input type="text" placeholder="Title.." name="name" onChange={this.handleInput} /><br />
          <label htmlFor="img" >Image</label>
          <input type="text" placeholder="Image Link " name="img" onChange={this.handleInput} /><br />
          <label htmlFor="rating">Rating</label>
          {/* <input type="Number" placeholder="Rating" name="rating" min="1" max="5" onChange={event => {
            this.setState({ rating: event.target.value, newMovie: Object.assign({ "title": this.state.title, "img": this.state.img, "rating": event.target.value }) });
          }} /><br /> */}

          <input type="Number" placeholder="Rating" name="rating" min="1" max="5" onChange={this.handleInput} /><br />
          <ModalFooter>
            <Button color="primary" onClick={()=>{ this.props.addMovie(this.state); this.toggle() ;} } >Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addMovie: (newmovie) => {
      dispatch(addMovie(newmovie));
    }
  }
}
const AddCardContainer = connect(null, mapDispatchToProps)(AddMovieComponent)

export default AddCardContainer
