import React, { Component } from 'react';
import CircularCarousel from '../../widgets/CircularCarousel/CircularCarousel';


class Gallery extends Component {
    state = {
      images: [
        {src: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg"},
        {src: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg"},
        {src: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg"},
        {src: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg"},
        {src: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg"},
        {src: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg"},
        {src: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg"},
        {src: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"}
      ]

    }

    render() {
      
      return (
        <div>
          <CircularCarousel images={this.state.images}/>
          <h1>{this.props.match.params.galleryName}</h1>
          <p>This is the Blog page</p>
        </div>
      );
    }
  }
  
  export default Gallery;