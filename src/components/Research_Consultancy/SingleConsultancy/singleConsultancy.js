import React, { Component } from 'react';
import './singleConsultancy.scss';
import Toolbar from '../../Menu/Toolbar/Toolbar';
import workImage from '../../../assets/images/frontpage.jpg';

export default class SingleConsultancy extends Component {
  state = {
    displayComment: 'noDisplay'
  };
  onDisplayComment = () => {
    console.log(this.state.displayComment);
    this.setState({
      displayComment: 'noDisplay' ? 'displayDiv' : 'noDisplay'
    });
  };
  render() {
    return (
      <div className='singleConsultancy'>
        <div className='menu'>
          <Toolbar />
        </div>
        <div className='container font-color'>
          <div className='consultancy box'>
            <div className='consult_image'>
              <img src={workImage} alt='' />
            </div>
            <div className='consult_desc'>
              <div className='consult_Title'>Title</div>
              <div className='consult_author'>
                {' '}
                by <span className='author'>AUTHOR</span> October 17, 2019
              </div>
              <div className='consult_text '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className='other'>
              <div className=' box left'>
                <div className='share'>
                  <i class='fas fa-share-alt'></i>
                  <span className='text'>SHARE</span>
                </div>
              </div>
              <div className='other_consults right'>
                Next story{' '}
                <span className='icon'>
                  <i class='fas fa-chevron-right'></i>
                </span>
              </div>
            </div>
            <div className='comments'>
              <div className='title' onClick={this.onDisplayComment}>
                Leave your comment
              </div>
              <div className={this.state.displayComment}>
                <div className='form'>
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
                      <legend>Comment</legend>
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
                </div>
              </div>
            </div>
          </div>
          <div className='clients box'>
            <div className='title'>Clients</div>
            <div className='number'>Total Number : 20</div>
          </div>
        </div>
      </div>
    );
  }
}
