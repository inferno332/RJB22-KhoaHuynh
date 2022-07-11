import React, { Component } from 'react'


export default class RatingButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            star: 0,
            items: [1,2,3,4,5]
        };

    }
    
    
    
    render() {
        return (
            <div>
            {this.state.items.map((item) => {
                if (item <= this.state.star) {
                    <i 
                    onClick={() => this.setState({star: item})}
                    style ={{color: 'blue', cursor: 'pointer'}} 
                    className="m-5 fa-4x fa-regular fa-thumbs-up">
                    </i>
                };
                // console.log(`item: ${item}`)
                return (
                    <i 
                    onClick={() => this.setState({star: item})}
                    style ={{color: 'black', cursor: 'pointer'}} 
                    className="m-5 fa-4x fa-regular fa-thumbs-up">
                    </i>
                );
            })}
            {console.log(this.state.star)}
      </div>
    )
  }
}
