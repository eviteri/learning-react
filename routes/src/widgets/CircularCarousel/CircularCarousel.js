import React, { Component } from 'react';
import './CircularCarousel.css';


class CircularCarousel extends Component {
    
    autoPlay = null;
    direction = null;

    goToNextSlide = () => {
        this.direction = -1;
        document.querySelector('.carousel-slider-wrapper').style.justifyContent = 'flex-start';
        document.querySelector('.carousel-slider-wrapper').style.transform = 'translate(-100%)';  
    }

    goToPrevSlide = () =>{
        if(this.direction  === -1){
			document.querySelector('.carousel-slider-wrapper').appendChild(document.querySelector('.carousel-slider-wrapper').firstElementChild);
			this.direction = 1;
        }
		document.querySelector('.carousel-slider-wrapper').style.justifyContent = 'flex-end';
		document.querySelector('.carousel-slider-wrapper').style.transform = 'translate(100%)'; 
    }

    transitionEnded = () => {
        if(this.direction === -1){
			document.querySelector('.carousel-slider-wrapper').appendChild(document.querySelector('.carousel-slider-wrapper').firstElementChild);
		}else{
			document.querySelector('.carousel-slider-wrapper').prepend(document.querySelector('.carousel-slider-wrapper').lastElementChild);
		}
		
		document.querySelector('.carousel-slider-wrapper').style.transition = 'none';
		document.querySelector('.carousel-slider-wrapper').style.transform = 'translate(0)';
		setTimeout(function(){
			document.querySelector('.carousel-slider-wrapper').style.transition = 'all 0.5s';
		})
    }

    triggerAutoPlay = () => {
        if(this.autoPlay === null){
            this.autoPlay = setInterval(() =>{ this.goToNextSlide() }, 3000);
        }
    }

    stopAutoPlay = () => {
        if(this.autoPlay){
            clearInterval(this.autoPlay);
            this.autoPlay = null;
        }
    }

    componentDidMount = () =>{
        if(this.props.images){
            this.triggerAutoPlay();
        }
        
    }

    componentWillUnmount = () => {
        if(this.props.images){
            this.stopAutoPlay();
        }
        
    }

    render() {
      
        let images = null;
        if(this.props.images){
            images = this.props.images.map( (image, index) => {
                return (
                    <div className="carousel-slide" key={index}>
                        <img src={image.src} alt="" />
                    </div>
                )
            });

            return (
                <div className="carousel-container" onMouseOver={this.stopAutoPlay} onMouseOut={this.triggerAutoPlay}>
                    <div className="carousel-slider-wrapper" onTransitionEnd={this.transitionEnded}>
                        {images}
                    </div>
      
                    <div className="carousel-previous-arrow carousel-arrow" onClick={this.goToPrevSlide}>
                        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="carousel-next-arrow carousel-arrow" onClick={this.goToNextSlide}>
                        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }

      
    }
  }
  
  export default CircularCarousel;