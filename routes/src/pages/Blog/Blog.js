import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Blog extends Component {
    render() {
      return (
          <div>
            <div>
                <h1>Blog</h1>
                <ul>
                    <li><Link to={`${this.props.match.url}/html`}>HTML</Link></li>
                    <li><Link to={`${this.props.match.url}/css`}>CSS</Link></li>
                    <li><Link to={`${this.props.match.url}/react`}>React</Link></li>
                </ul>
            </div>
            
        </div>
      );
    }
  }
  
  export default Blog;