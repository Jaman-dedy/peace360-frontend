import React, { Component } from 'react';
import Toolbar from '../../components/Menu/Toolbar/Toolbar';
import './getInvolved.scss';
import gratitude from '../../assets/images/gratitude.png';

class GetInvolved extends Component {
  render() {
    return (
      <div className='content'>
        <Toolbar />
        <div className='get-container'>
          <div className='image-container'>
            <div className='img box'>
              <img src={gratitude} alt='' className='' />
            </div>
            <div className='box'>
              <div className='text-card'>
                <div className='title white'>Get involved</div>
                <div className='text white center'>How you can help?</div>
                <div className='btn center'>
                  <a href='https://www.paypal.com/donate/?token=_VQyNdoX3Uwh_d2YCvuENOic29MglXbZf-kbE0s30D9_a1a3jgw2lCyXb9PGA_rZNzStW0&country.x=US&locale.x=US'>
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='brand-new'>
            <div className='brand font-color'>
              Join individuals and organizations involved in peace building in
              your area to support us.
            </div>
          </div>
          <div className='getcontainer left'>
            {/* <hr /> */}
            <div className='row'>
              <div className='box card '>
                <div className='connect'>
                  <div className='card_icon blue'>
                    <i className='fas fa-network-wired'></i>
                  </div>
                  <div className='card_title'>
                    <div className='title font-color center'>
                      Connect with others
                    </div>
                  </div>
                  <div className='card_text center'>
                    <div className='text font-color'>
                      Connect with individuals and organizations involved in
                      peace building in your area
                    </div>
                  </div>
                  <div className='card_button'>
                    <div className='btn center'>
                      <a
                        href='http://peacemaker360.com/contact/'
                        className='white blue-bg'
                      >
                        CONNECT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='box card '>
                <div className='donate black-bg'>
                  <div className='card_icon blue'>
                    <i className='fas fa-donate'></i>
                  </div>
                  <div className='card_title'>
                    <div className='title white center'>Make a donation</div>
                  </div>
                  <div className='card_text center'>
                    <div className='text white'>
                      you can donate any amount to help us reach more activities
                      and tell their inspiring stories.Your contribution means a
                      lot
                    </div>
                  </div>
                  <div className='card_button'>
                    <div className='btn center'>
                      <a
                        href='https://www.paypal.com/donate/?token=_VQyNdoX3Uwh_d2YCvuENOic29MglXbZf-kbE0s30D9_a1a3jgw2lCyXb9PGA_rZNzStW0&country.x=US&locale.x=US'
                        className='white blue-bg'
                      >
                        DONATE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='box card '>
                <div className='spreadup blue-bg'>
                  <div className='card_icon black'>
                    <i className='fas fa-donate'></i>
                  </div>
                  <div className='card_title'>
                    <div className='title white center'>
                      Spread to the world
                    </div>
                  </div>
                  <div className='card_text center'>
                    <div className='text white'>
                      Help us to spread the word about our campaign.
                    </div>
                    <div className='shareIcon'>
                      <div className='box-icon '></div>
                      <div className='box-icon facebook white black-bg'>
                        <i className='fab fa-facebook-f'></i>
                      </div>
                      <div className='box-icon white black-bg'>
                        <i className='fab fa-instagram'></i>
                      </div>
                      <div className='box-icon white black-bg'>
                        <i className='fab fa-twitter'></i>
                      </div>
                    </div>
                  </div>
                  <div className='card_button'>
                    <div className='btn center'>
                      <a
                        href='https://www.paypal.com/donate/?token=_VQyNdoX3Uwh_d2YCvuENOic29MglXbZf-kbE0s30D9_a1a3jgw2lCyXb9PGA_rZNzStW0&country.x=US&locale.x=US'
                        className='white black-bg'
                      >
                        DONATE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='box card '>
                <div className='donate_direct'>
                  <div className='card_icon blue'>
                    <i className='fas fa-donate'></i>
                  </div>
                  <div className='card_title'>
                    <div className='title font-color center'>
                      Direct donation
                    </div>
                  </div>
                  <div className='card_text center'>
                    <div className='text font-color'>
                      You can donate directly using your card here
                    </div>
                    <div className='form'>
                      <div className='row'>
                        <div className='box'>
                          <fieldset>
                            <legend>Name on the card</legend>
                            <input
                              type='text'
                              placeholder='Benedict Musabimana'
                            />
                          </fieldset>
                        </div>
                        <div className='box'>
                          <fieldset>
                            <legend>Amount</legend>
                            <input type='text' placeholder='$100' />
                          </fieldset>
                        </div>
                      </div>
                      <div className='row'>
                        <div className=''>
                          <fieldset>
                            <legend>card number</legend>
                            <input
                              type='text'
                              placeholder='XXXX-XXXX-XXXX-XXXX'
                            />
                          </fieldset>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='box'>
                          <fieldset>
                            <legend>Expire date</legend>
                            <input type='month' />
                          </fieldset>
                        </div>
                        <div className='box'>
                          <fieldset>
                            <legend>CVV</legend>
                            <input type='text' placeholder='000' />
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card_button'>
                    <div className='btn center'>
                      <a
                        href='https://www.paypal.com/donate/?token=_VQyNdoX3Uwh_d2YCvuENOic29MglXbZf-kbE0s30D9_a1a3jgw2lCyXb9PGA_rZNzStW0&country.x=US&locale.x=US'
                        className='white blue-bg'
                      >
                        DONATE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetInvolved;
