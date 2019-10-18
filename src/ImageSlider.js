// your ImageSlider code here!

import React, { component } from 'react';

class ImageSlider extends React.Component {

    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render (){
        const slideNumber = `I am on slide ${this.state.currentSlideIndex}`
        return(
            <div>
                {slideNumber}
            </div>
        )
    }
}

export default ImageSlider;