import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './CommentForm.module.scss';

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
  inputChangedHandler = event => {};
  render() {
    let form = (
      <form>
        <Input
          elementType={this.state.commentForm.comment.elementType}
          elementConfig={this.state.commentForm.comment.elementConfig}
          value={this.state.commentForm.comment.value}
          invalid={!this.state.commentForm.comment.valid}
          shouldValidate={this.state.commentForm.comment.validation}
          touched={this.state.commentForm.comment.touched}
          changed={e => this.inputChangedHandler(e)}
        />
        <Button>COMMENT</Button>
      </form>
    );
    return (
      <div className={classes.CommentForm}>
        {' '}
        <h4>What do you think about this article?</h4>
        {form}
      </div>
    );
  }
}

export default CommentForm;
