import React, { Component } from 'react'


export default class RatingButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 0,
        };

        this.setRating = this.setRating.bind(this);
    }
    
    setRating(num) {
        this.setState({rating: num})
    }

    StarRating = () => {
        return (
          <div className="star-rating">
            {[...Array(5)].map((arr,index) => {        
              index +=1;
              console.log(`rating: ${this.state.rating}`);
              console.log(`index: ${index}`);
              return (         
                  <button
                  type='button'
                  key={index}
                  className={index <= this.state.rating ? 'on' : 'off'}
                  onClick={() => this.setRating(index)}
                  ><span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        );
    };
    
    render() {
        return (
            <div>
                {this.StarRating()}
            </div>
    )
  }
}
