import React, { Component } from 'react'
import './LikeButton.css'

export default class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: true
    };
  }
  
  render() {
    return (
      <div>
          {this.state.like  &&
            (<i onClick={() => this.setState({like: false})} className="m-5 fa-4x fa-regular fa-thumbs-up"></i>)}
            {console.log(this.state.like)}
          {!this.state.like  &&
            (<i onClick={() => this.setState({like: true})} className="on m-5 fa-4x fa-regular fa-thumbs-up"></i>)}
      </div>
      
    )
  }
  
}

