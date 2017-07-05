'use strict';

import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge } from 'antd';
import avater from '../assets/genji.jpg';

const {Header} = Layout;

class HeaderCustom extends Component {
  state = {
    user: '',
  };

  render() {
    return ( 
          <Header style={{ background: '#fff' }}>
            <Icon className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
      );
    }
  }

  export default HeaderCustom;
