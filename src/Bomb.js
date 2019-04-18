// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {

    constructor(props) {
        super(props)
          // ...define initial state with a key of 'color' set to the 'value' prop
        this.state = {
          secondsLeft: props.initialCount

        }
    }
    render() {
        const text = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    
         return (
          <div>{text}</div>
        )
      }

}