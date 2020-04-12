import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
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
    return <Wrapper>{foundComment}</Wrapper>;
  }
}

export default Comments;
