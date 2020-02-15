import React, { Component } from 'react';

class UserSocial extends Component {
  state = {
    utube: false,
    twitter: false,
    facebook: false,
    linkedin: false,
    instagram: false
  };
  onCheckUTube = () => {
    let change = this.state.utube;
    this.setState({
      utube: !change
    });
  };
  onCheckTwitter = () => {
    let change = this.state.twitter;
    this.setState({
      twitter: !change
    });
  };
  onCheckFacebook = () => {
    let change = this.state.facebook;
    this.setState({
      facebook: !change
    });
  };
  onCheckLinkedIn = () => {
    let change = this.state.linkedin;
    this.setState({
      linkedin: !change
    });
  };
  onCheckInstagram = () => {
    let change = this.state.instagram;
    this.setState({
      instagram: !change
    });
  };
  render() {
    const { utube, twitter, facebook, linkedin, instagram } = this.state;
    return (
      <div>
        <fieldset>
          <legend>Social media</legend>
          <div className='row social'>
            <label htmlFor='linkedin'>Youtube</label>
            <input
              type='checkbox'
              checked={utube}
              onClick={this.onCheckUTube}
            />
            {utube ? (
              <div>
                <input
                  type='text'
                  className='link'
                  placeholder='Enter your Youtube channel'
                />
                <button type='submit'>Save</button>
              </div>
            ) : null}
          </div>
          <div className='row social'>
            <label htmlFor='twitter'>Twitter</label>
            <input
              type='checkbox'
              checked={twitter}
              onClick={this.onCheckTwitter}
            />
            {twitter ? (
              <div>
                <input
                  type='text'
                  className='link'
                  placeholder='Enter your Twitter username'
                />
                <button type='submit'>Save</button>
              </div>
            ) : null}
          </div>
          <div className='row social'>
            <label htmlFor='facebook'>Facebook</label>
            <input
              type='checkbox'
              checked={facebook}
              onClick={this.onCheckFacebook}
            />
            {facebook ? (
              <div>
                <input
                  type='text'
                  className='link'
                  placeholder='Enter your Facebook username'
                />
                <button type='submit'>Save</button>
              </div>
            ) : null}
          </div>
          <div className='row social'>
            <label htmlFor='Linkedin'>Linkedin</label>
            <input
              type='checkbox'
              checked={linkedin}
              onClick={this.onCheckLinkedIn}
            />
            {linkedin ? (
              <div>
                <input
                  type='text'
                  className='link'
                  placeholder='Enter your LinkedIn username'
                />
                <button type='submit'>Save</button>
              </div>
            ) : null}
          </div>
          <div className='row social'>
            <label htmlFor='Instagram'>Instagram</label>
            <input
              type='checkbox'
              checked={instagram}
              onClick={this.onCheckInstagram}
            />

            {instagram ? (
              <div>
                <input
                  type='text'
                  className='link'
                  placeholder='Enter your Instagram username'
                />
                <button type='submit'>Save</button>
              </div>
            ) : null}
          </div>
        </fieldset>
      </div>
    );
  }
}

export default UserSocial;
