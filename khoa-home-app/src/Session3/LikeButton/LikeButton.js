import React, { Component } from 'react'
import './LikeButton.css'

export default class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: ''
    };
  }
  
  render() {
    return (
      <div>
          {this.state.like && 
            (<i onClick={() => this.setState({like: 'off'})} className="m-5 fa-4x fa-regular fa-thumbs-up"></i>)}
          {!this.state.like && 
            (<i onClick={() => this.setState({like: 'on'})} className="on m-5 fa-4x fa-regular fa-thumbs-up"></i>)}
      </div>
      
    )
  }
  
  
}

