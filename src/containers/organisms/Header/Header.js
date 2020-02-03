/* eslint-disable compat/compat */
// @flow
import React, { PureComponent } from 'react';
// import type { Node } from 'react';
import get from 'lodash/get';
import { connect } from 'react-redux';
// import type { Props } from './types';

import HeaderComponent from '../../../components/organisms/Header';

class Header extends PureComponent {
  state = {
    navBar: [],
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/mhddanish111/demoapi/navBar')
      .then(res => res.json())
      .then(res => {
        this.setState({ navBar: res });
      });
  }

  render() {
    const { navBar } = this.state;
    return <HeaderComponent nav={navBar} />;
  }
}

const mapStateToProps = state => ({
  nav: get(state, ['global', 'globalData', 'labels', 'header', 'nav']),
});

export default connect(mapStateToProps)(Header);


