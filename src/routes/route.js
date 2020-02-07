import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Login from '../containers/Auth/Login/Login';
import Signup from '../containers/Auth/Signup/Signup';
import SingleArticle from '../components/SingleArticle/SingleArticle';
import Profile from '../components/Profile/Profile';
import AboutUs from '../components/AboutUs/AboutUs';
import Contact from '../components/Contact/Contact';
import GetInvolved from '../components/GetInvolved/GetInvolved';

class Routes extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/singleArticle' component={SingleArticle} />
        <Route path='/profile' component={Profile} />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/contact' component={Contact} />
        <Route path='/getInvolved' component={GetInvolved} />
      </Switch>
    );
    return <div>{routes}</div>;
  }
}
export default Routes;
