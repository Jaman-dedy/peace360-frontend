import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './singleConsultancy.scss';
import Toolbar from '../../Menu/Toolbar/Toolbar';
import workImage from '../../../assets/images/frontpage.jpg';
import avatar from '../../../assets/images/avatar.jpg';

export default class SingleConsultancy extends Component {
  state = {
    displayComment: false,
    display: false
  };
  onDisplayComment = () => {
    this.setState({
      displayComment: !this.state.displayComment
    });
  };
  onDisplayPreviousComment = () => {
    const change = !this.state.display;
    console.log('change', change, 'display', this.state.display);
    this.setState({
      display: change
    });
  };
  render() {
    return (
      <div className='singleConsultancy'>
        <div className='menu'>
          <Toolbar />
        </div>
        <div className='container font-color'>
          <NavLink to='/consultResearch'>
            <div className='back box'>
              <i class='fas fa-chevron-left font-color'></i>
            </div>
          </NavLink>

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
              {this.state.displayComment ? (
                <div>
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
                          <input
                            type='text'
                            placeholder='example@example.com'
                          />
                        </fieldset>
                      </div>
                    </div>
                    <div className='row'>
                      <fieldset>
                        <legend>Comment</legend>
                        <textarea
                          name='textarea'
                          id='textarea'
                          cols='114'
                          rows='7'
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className='btn'>
                      <button>Submit</button>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className='comment'>
                <div className='title' onClick={this.onDisplayPreviousComment}>
                  Previous comments
                </div>
                <div>
                  {this.state.display ? (
                    <div className='userDetails'>
                      <div className='image box'>
                        <img src={avatar} alt='' />
                      </div>
                      <div className='commentDetails box'>
                        <div className='username'>
                          username
                          <span> 20days ago</span>
                        </div>
                        <div className='comment_desc'>
                          Suspendisse egestas fringilla mauris, ut molestie elit
                          viverra vel. Praesent a aliquet quam. Donec convallis
                          tempus scelerisque. Suspendisse vehicula sapien erat,
                          porta tincidunt leo gravida eget. Nullam ultrices quam
                          id ligula iaculis facilisis.
                        </div>
                        <div className='reactions'>
                          <i class='fas fa-heart'></i>
                          <span>100 Likes</span>
                          <span> share</span>
                        </div>
                      </div>
                    </div>
                  ) : null}
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
