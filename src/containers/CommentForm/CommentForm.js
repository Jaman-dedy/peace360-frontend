import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './CommentForm.module.scss';
import * as actions from '../../store/actions/index';
import { updatedObject, checkValidity } from '../../shared/utility';
import Aux from '../../hoc/Aux/Aux';

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
    formIsValid: false
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
    e.preventDefault();
    this.props.onSubmitComment(this.state.commentForm.comment.value, articleId);

    const updatedText = updatedObject(this.state.commentForm, {
      comment: updatedObject(this.state.commentForm['comment'], {
        value: ''
      })
    });
    console.log('updatedText', updatedText);
    this.setState({ commentForm: updatedText });
  };

  render() {
    const { articleId } = this.props;
    let idArticle;

    if (articleId) {
      idArticle = articleId;
    }
    let form = (
      <Aux>
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
      </Aux>
    );
    return (
      <div className={classes.CommentForm}>
        {' '}
        <h4>What do you think about this article?</h4>
        <form onSubmit={e => this.submitCommentHandler(e, idArticle)}>
          {form}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comment: state.postComment,
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
