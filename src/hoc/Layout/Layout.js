import React, { Component } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Layout.module.scss';
import Toolbar from '../../components/Menu/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer ';

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <Toolbar />
        <div className={classes.Container}>
          <main className={classes.Content}>{this.props.children}</main>
        </div>

        <Footer />
      </Wrapper>
    );
  }
}
export default Layout;
