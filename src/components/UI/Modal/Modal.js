import React, { Component } from 'react';
import classes from './Modal.module.scss';

class Modal extends Component {
  render() {
    return (
      <div id='myModal' className={classes.modal}>
        <div className='modal-content'>
          <main className={classes.modal_content}>{this.props.children}</main>
        </div>
      </div>
    );
  }
}
export default Modal;
