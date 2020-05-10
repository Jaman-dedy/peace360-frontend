import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class CreateArticleLink extends Component {
  render() {
    return (
      <NavLink to={this.props.link} className="classLink">
     
        <div className="icon">
          <i className="fas fa-plus"></i>
        </div>
      </NavLink>
    );
  }
}
export default CreateArticleLink;
