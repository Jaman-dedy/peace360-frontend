/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import './Carousel.scss';
import classNamees from './Carousel.module.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.tile = React.createRef();
  }
  intervalId = 0;

  // tile = React.createRef;
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.tile.current.scrollBy({
        left: 100,
        behavior: 'smooth'
      });
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="row" ref={this.tile}>
        <div className="row__inner">
          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state of security and calmness
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg"
                alt=""
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                <div className={classNamees.Title}>
                  Peace is a stress-free state...
                </div>
                <div className={classNamees.Detail}>
                  📍Kinshasa | 📅 24th Oct 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <div className={classNamees.Sliders}>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      //   <div className={classNamees.Carousel}>
      //     <div>
      //       <img src={carouselImg} alt="" />
      //     </div>
      //     <div className={classNamees.Title}>
      //       Peace is a stress-free state of security and calmness
      //     </div>
      //     <div className={classNamees.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
      //   </div>
      // </div>
    );
  }
}

export default Carousel;
