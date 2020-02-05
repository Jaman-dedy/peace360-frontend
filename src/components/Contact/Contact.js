import React, { Component } from 'react';
import Toolbar from '../../components/Menu/Toolbar/Toolbar';
import Modal from '../UI/Modal/Modal';
import happyKids from '../../assets/images/happyKids.png';
import './Contact.scss';

class Contact extends Component {
  state = {
    modal: 'removeModal'
  };
  onDisplayModal = () => {
    this.setState({
      modal: 'displayModal'
    });
  };
  onRemoveModal = e => {
    
    if (
      e.target.className === 'modal-content' ||
      e.target.className === 'close'
    ) {
      this.setState({
        modal: 'removeModal'
      });
    }
  };

  render() {
    return (
      <div>
        <div className={this.state.modal}>
          <div onClick={this.onRemoveModal}>
            <Modal>
              <span className='close' onClick={this.onRemoveModal}>
                &times;
              </span>

              <div className='title main-color'>Contact Us</div>
              <div className='text font-color'>
                Need to talk to our team? Connect with them using this form.
              </div>
              <div className='form'>
                <div className='row'>
                  <div className='box'>
                    <fieldset>
                      <legend>First name</legend>
                      <input type='text' placeholder='Benedict' />
                    </fieldset>
                  </div>
                  <div className='box'>
                    <fieldset>
                      <legend>Last name</legend>
                      <input type='text' placeholder='Musabimana' />
                    </fieldset>
                  </div>
                </div>
                <div className='row'>
                  <div className='box'>
                    <fieldset>
                      <legend>Username</legend>
                      <input type='text' placeholder='Bene' />
                    </fieldset>
                  </div>
                  <div className='box'>
                    <fieldset>
                      <legend>Email address</legend>
                      <input type='text' placeholder='example@example.com' />
                    </fieldset>
                  </div>
                </div>
                <div className='row'>
                  <fieldset>
                    <legend>Reason for contacting</legend>
                    <textarea
                      name='textarea'
                      id='textarea'
                      cols='119'
                      rows='7'
                    ></textarea>
                  </fieldset>
                </div>
                <div className='btn'>
                  <button>Submit</button>
                </div>
                <div className='text font-color'>
                  By submitting this form you agree our terms. See our{' '}
                  <span className='primary-color'>privacy policy</span> to learn
                  about how we use your information.
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div className='content'>
          <Toolbar className='menu' />
          <div className='container'>
            <div className='box'>
              <div className='info center'>
                <div className='card'>
                  <div className='title white '>
                    Contact our team for support
                  </div>
                  <div className='text white'>
                    Need to get in touch with the team? We are all ears.
                  </div>
                  <div className='btn'>
                    <button className='contactUs' onClick={this.onDisplayModal}>
                      {' '}
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='image'>
                <img src={happyKids} alt='' />
              </div>
            </div>
            info
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
