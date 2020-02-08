import React, { Component } from 'react';
import './Research_Consultancy.scss';
import Toolbar from '../../components/Menu/Toolbar/Toolbar';
import { NavLink } from 'react-router-dom';
import workImage from '../../assets/images/frontpage.jpg';

class Research_Consultancy extends Component {
  state = {
    arrayList: [
      {
        image: workImage,
        title: 'Title here',
        text:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        image: workImage,
        title: 'Title here',
        text:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        image: workImage,
        title: 'Title here',
        text:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  };
  render() {
    const newList = this.state.arrayList;
    return (
      <div className='ourWork'>
        <div className='menu'>
          <Toolbar />
        </div>
        <div className='container'>
          {newList.map((object, key) => (
            <div className='card' key={key}>
              <div className='card_img'>
                <img src={object.image} alt='' />
              </div>
              <div className='title font-color'>{object.title}</div>
              <div className='text font-color'>{object.text}</div>
              <NavLink
                style={{ textDecoration: 'none' }}
                to='/singleConsultancy'
              >
                <div className='read_more '>
                  Read more{' '}
                  <span>
                    <i className='fas fa-chevron-right'></i>
                  </span>
                </div>
              </NavLink>
            </div>
          ))}
          <div className='here'></div>
        </div>
      </div>
    );
  }
}
export default Research_Consultancy;
