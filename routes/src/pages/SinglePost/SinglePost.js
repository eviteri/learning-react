import React, { Component } from 'react';

class SinglePost extends Component {

  

    render() {
      console.log(this.props);
      
      return (
        <div>
          <h1>Single Post</h1>
          <p>This is the single post page for {this.props.match.params.singlePostId}</p>
        </div>
      );
    }
  }
  
  export default SinglePost;