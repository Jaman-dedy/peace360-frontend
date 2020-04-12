import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './CommentForm.module.scss';
import * as actions from '../../store/actions/index';
import { updatedObject, checkValidity } from '../../shared/utility';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import userAvatar from '../../assets/images/avatar.jpg';

class CommentForm extends Component {
  state = {
    commentForm: {
      comment: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    instantComment: []
  };
  inputChangedHandler = (event, inputName) => {
    const updatedInputs = updatedObject(this.state.commentForm, {
      [inputName]: updatedObject(this.state.commentForm[inputName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.commentForm[inputName].validation
        ),
        touched: true
      })
    });
    this.setState({ commentForm: updatedInputs });
  };

  submitCommentHandler = (e, articleId) => {
    this.setState({
      instantComment: [
        ...this.state.instantComment,
        this.state.commentForm.comment.value
      ]
    });

    e.preventDefault();
    this.props.onSubmitComment(this.state.commentForm.comment.value, articleId);

    const updatedText = updatedObject(this.state.commentForm, {
      comment: updatedObject(this.state.commentForm['comment'], {
        value: ''
      })
    });
    this.setState({ commentForm: updatedText });
  };

  render() {
    let instantCommentThread = null;
    const { comment } = this.props;
    const { articleId } = this.props;
    let idArticle;

    if (articleId) {
      idArticle = articleId;
    }

    if (!this.state.instantComment.length) {
      instantCommentThread = '';
    } else {
      const sortArray = _.reverse(this.state.instantComment);
      instantCommentThread = sortArray.map((instComment, index) => {
        return (
          <div key={index} className={classes.Comment}>
            <div className={classes.Avatar}>
              <img src={comment.avatar ? comment.avatar : userAvatar} alt="" />
            </div>
            <div className={classes.Details}>
              <strong>{comment.name}</strong>{' '}
              <span>{moment(comment.date).fromNow()}</span>
            </div>
            <div className={classes.Text}>{instComment}</div>
          </div>
        );
      });
    }

    let form = (
      <Wrapper>
        <Input
          elementType={this.state.commentForm.comment.elementType}
          elementConfig={this.state.commentForm.comment.elementConfig}
          value={this.state.commentForm.comment.value}
          invalid={!this.state.commentForm.comment.valid}
          shouldValidate={this.state.commentForm.comment.validation}
          touched={this.state.commentForm.comment.touched}
          changed={e => this.inputChangedHandler(e, 'comment')}
        />

        <Button>COMMENT</Button>
      </Wrapper>
    );
    return (
      <Wrapper>
        <div className={classes.CommentForm}>
          {' '}
          <h4>What do you think about this article?</h4>
          <form onSubmit={e => this.submitCommentHandler(e, idArticle)}>
            {form}
          </form>
        </div>
        {instantCommentThread}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    comment: state.postComment.comment,
    loading: state.PostComment,
    error: state.PostComment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitComment: (text, articleId) =>
      dispatch(actions.postComment(text, articleId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
