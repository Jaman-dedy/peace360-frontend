import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import classes from './AboutUs.module.scss';
import './AboutUs.scss';
import CelebrationImg from '../../assets/svg/celebration.svg';
import citoAvatar from '../../assets/images/cito.png';
import danielAvatar from '../../assets/images/daniel.png';
import maijaAvatar from '../../assets/images/maija.png';
import jessicaAvatar from '../../assets/images/jessica.png';

class AboutUs extends Component {
  state = {
    slideIndex: 0
  };
  plusSlides = (e, number) => {
    // this.showSlides((slideIndex += n));
    this.setState(prevState => {
      return { slideIndex: prevState.slideIndex + number };
    });
  };
  currentSlide = (e, number) => {
    // showSlides((slideIndex = n));
  };
  showSlides = n => {
    let i;
    let slides = document.getElementsByClassName('slide-founder');
    let dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' actives', '');
    }
    this.state.slideIndex >= slides.length
      ? this.setState({ slideIndex: 0 })
      : this.state.slideIndex < 0
      ? this.setState({ slideIndex: 3 })
      : (slides[this.state.slideIndex].style.display = 'block');
    this.state.slideIndex >= slides.length
      ? this.setState({ slideIndex: 0 })
      : this.state.slideIndex < 0
      ? this.setState({ slideIndex: 3 })
      : (dots[this.state.slideIndex].className += ' actives');
  };
  componentDidMount() {
    this.showSlides(this.state.slideIndex);
  }
  componentDidUpdate() {
    this.showSlides(this.state.slideIndex);
  }
  render() {
    return (
      <Layout>
        <div className={classes.AboutUs}>
          <div className={classes.Title}>
            <h1>About us</h1>
            <h4>
              Every day, people suffer and lives are destroyed because of war.
              But it doesn’t have to be this way
            </h4>
          </div>
          <div className={classes.Celebrate}>
            <img src={CelebrationImg} alt="" />
          </div>
          <div className={classes.Welcome}>
            <h4>
              “Never doubt that a small group of thoughtful, committed, citizens
              can change the world. Indeed, it is the only thing that ever has.”
            </h4>
            <span>
              <p>
                Mainstream and social media are constantly flooded with
                despondent stories of conflict and war around the world. Yet,
                while it is crucial to report on these tragedies, the stories of
                local peacemakers and activists are often left untold. The
                stories of ordinary citizens, who brave all odds in search of
                building peaceful communities, often never reach the newsrooms
                of influential media agencies.
              </p>

              <p>
                Peacemaker 360 is a non-profit working to disrupt this negative
                pattern by telling the stories of resilience and courage of
                ordinary people working for peace in their communities and
                around the world. By so doing, we hope to inspire, connect,
                amplify activism for peace and justice around the world.
              </p>

              <p>
                We believe that these stories matter to restore the dignity of
                people in places affected by conflicts and shape transformative
                peace narratives. We are a 501 c(3) and receive tax-deductible
                donations in support for our work. Thank you for considering
                giving any amount to help us reach more peace activists and
                share their stories of resilience. Thank you.
              </p>
            </span>
          </div>
          <div className={classes.Team}>
            <h2 className={classes.TeamTitle}>Meet our team</h2>
            <h4 className={classes.TeamSubTitle}>
              Meet The Brains Behind The Success of Peacemaker360°
            </h4>
            <div className="slide-founder">
              <div className={classes.Avatar}>
                <img src={citoAvatar} alt="" />
              </div>
              <div className={classes.Pagination}>
                <Link
                  to="#"
                  className={classes.Prev}
                  onClick={e => this.plusSlides(e, -1)}
                >
                  &#10094;{' '}
                </Link>{' '}
                <Link
                  to="#"
                  className={classes.Next}
                  onClick={e => this.plusSlides(e, 1)}
                >
                  &#10095;
                </Link>
              </div>
              <div className={classes.Description}>
                <p>
                  Christian Cito Cirhigiri is a Congolese peace activist with
                  eight years supporting youth participation in peacebuilding
                  processes in eastern Congo, Rwanda, and Burundi. Christian is
                  passionate about mass communications and the role of social
                  media to foster knowledge and experience sharing among
                  peacebuilding professionals around the world
                </p>
              </div>
              <div className={classes.Details}>
                <span className={classes.Name}>
                  <strong>Christian Cito Cirhigiri</strong>{' '}
                </span>
                <span className={classes.Function}>FOUNDER</span>
                <span className={classes.SocialMedia}>
                  <Link to="#">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </span>
              </div>
            </div>
            <div className="slide-founder">
              <div className={classes.Avatar}>
                <img src={danielAvatar} alt="" />
              </div>
              <div className={classes.Pagination}>
                <Link
                  to="#"
                  className={classes.Prev}
                  onClick={e => this.plusSlides(e, -1)}
                >
                  &#10094;{' '}
                </Link>{' '}
                <Link
                  to="#"
                  className={classes.Next}
                  onClick={e => this.plusSlides(e, 1)}
                >
                  &#10095;
                </Link>
              </div>
              <div className={classes.Description}>
                <p>
                  Daniel Rivkin is an international media executive, who has
                  worked in some 70 countries as a journalist, producer, bureau
                  chief, and global product manager for Reuters, and then as a
                  general manager and corporate communications consultant for
                  governments and some of the world’s largest companies, NGOs
                  and international agencies.
                </p>
              </div>
              <div className={classes.Details}>
                <span className={classes.Name}>
                  <strong>Daniel Rivkin</strong>{' '}
                </span>
                <span className={classes.Function}>SENIOR ADVISOR</span>
                <span className={classes.SocialMedia}>
                  <Link to="#">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </span>
              </div>
            </div>
            <div className="slide-founder">
              <div className={classes.Avatar}>
                <img src={maijaAvatar} alt="" />
              </div>
              <div className={classes.Pagination}>
                <Link
                  to="#"
                  className={classes.Prev}
                  onClick={e => this.plusSlides(e, -1)}
                >
                  &#10094;{' '}
                </Link>{' '}
                <Link
                  to="#"
                  className={classes.Next}
                  onClick={e => this.plusSlides(e, 1)}
                >
                  &#10095;
                </Link>
              </div>
              <div className={classes.Description}>
                <p>
                  Maija Jespersen is a writer and researcher focused on
                  normative violence and positive peace. Her publications
                  include, “Men are not Yang and Women are not Yin: Gender
                  Construction in the Tao Te Ching and I Ching” and, “The
                  Goddess-Worshipping Age: Feminist Egalitarianism in Prehistory
                  and Early History,” in Feminism and Religion: How Faiths View
                  Women and Their Rights (2016)
                </p>
              </div>
              <div className={classes.Details}>
                <span className={classes.Name}>
                  <strong>Maija Jespersen</strong>{' '}
                </span>
                <span className={classes.Function}>EDITOR</span>
                <span className={classes.SocialMedia}>
                  <Link to="#">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </span>
              </div>
            </div>
            <div className="slide-founder">
              <div className={classes.Avatar}>
                <img src={jessicaAvatar} alt="Jessica" />
              </div>
              <div className={classes.Pagination}>
                <Link
                  to="#"
                  className={classes.Prev}
                  onClick={e => this.plusSlides(e, -1)}
                >
                  &#10094;{' '}
                </Link>{' '}
                <Link
                  to="#"
                  className={classes.Next}
                  onClick={e => this.plusSlides(e, 1)}
                >
                  &#10095;
                </Link>
              </div>
              <div className={classes.Description}>
                <p>
                  Australian Lawyer and Mediator of Lebanese background who is
                  passionate to promote human rights everywhere. Jessica is keen
                  on supporting the rights of marginalized individuals and
                  communities.
                </p>
              </div>
              <div className={classes.Details}>
                <span className={classes.Name}>
                  <strong>Jessica Kastoun</strong>{' '}
                </span>
                <span className={classes.Function}>
                  CONSULTANT & PR MANAGER
                </span>
                <span className={classes.SocialMedia}>
                  <Link to="#">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </span>
              </div>
            </div>
            <div className="founder-dot">
              <span
                className="dot"
                onClick={e => this.currentSlide(e, 1)}
              ></span>
              <span
                className="dot"
                onClick={e => this.currentSlide(e, 2)}
              ></span>
              <span
                className="dot"
                onClick={e => this.currentSlide(e, 3)}
              ></span>
              <span
                className="dot"
                onClick={e => this.currentSlide(e, 4)}
              ></span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutUs;
