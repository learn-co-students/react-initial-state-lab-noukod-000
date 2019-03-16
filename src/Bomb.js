import React from 'react';

class Bomb extends React.Component{
    constructor(props){
        super(props);
        this.state={
            secondsLeft:this.props.initialCount
        }
    }

    render(){
        const { secondsLeft }=this.state;
        let text=""
        if(secondsLeft===0){
            text="Boom!"
        }else{
            text=`${secondsLeft} seconds left before I go boom!`
        }

        return(<div>{text}</div>)
    }
}

export default Bomb;