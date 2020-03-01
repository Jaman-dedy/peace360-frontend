import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Comment from './Comment/Comment';
import Spinner from '../../components/UI/Spinner/Spinner';

class Comments extends Component {
  render() {
    let foundComment;
    const { comments } = this.props;
    if (!comments) {
      foundComment = <Spinner />;
    } else {
      foundComment = comments.map(comment => {
        return <Comment key={comment._id} comment={comment} />;
      });
    }
    return <Aux>{foundComment}</Aux>;
  }
}

export default Comments;
