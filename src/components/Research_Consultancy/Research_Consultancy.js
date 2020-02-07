import React, { Component } from 'react';
import './Research_Consultancy.scss';
import Toolbar from '../../components/Menu/Toolbar/Toolbar';
import workImage from '../../assets/images/frontpage.jpg';

class Research_Consultancy extends Component {
  state = {
    arrayList: [
      {
        image: workImage,
        title: 'Title here',
        text:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  };
  render() {
    const newlist = this.state.arrayList;
    return (
      <div className='ourWork'>
        <div className='menu'>
          <Toolbar />
        </div>
        <div className='container'>
          <div className='card'>
            <div className='card_img'>
              <img src={workImage} alt='' />
            </div>
            <div className='title font-color'>Title here</div>
            <div className='text font-color'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='read_more '>
              <a href='#'>
                Read more{' '}
                <span>
                  <i class='fas fa-chevron-right'></i>
                </span>
              </a>
            </div>
          </div>
          <div className='card card-center'>
            <div className='card_img'>
              <img src={workImage} alt='' />
            </div>
            <div className='title font-color'>Title here</div>
            <div className='text font-color'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='read_more '>
              <a href='#'>
                Read more{' '}
                <span>
                  <i class='fas fa-chevron-right'></i>
                </span>
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='card_img'>
              <img src={workImage} alt='' />
            </div>
            <div className='title font-color'>Title here</div>
            <div className='text font-color'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='read_more '>
              <a href='#'>
                Read more{' '}
                <span>
                  <i class='fas fa-chevron-right'></i>
                </span>
              </a>
            </div>
          </div>
          .
        </div>
      </div>
    );
  }
}
export default Research_Consultancy;
