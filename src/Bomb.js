import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    boom = () =>{
        const secondsLeft = this.state.secondsLeft
        if (secondsLeft === 0){
            return (<h2>Boom!</h2>)
        }
        return (<h2>{ secondsLeft } seconds left before I go boom!</h2>)
    }

    render() {
        return(
            this.boom()
        )
    }
}