'use strict';

import React, { Component } from 'react';
import { Layout, Menu, Icon, Affix } from 'antd';
import { Link } from 'dva/router';
import UserInfo from './UserInfo/UserInfo';
import avater from '../../assets/genji.jpg';
import styles from './HeaderLayout.css';

const {Header} = Layout;

class HeaderLayout extends Component {
  state = {
    user: '',
  };

  handleClickLogout = () => {

  };

  render() {
    return ( 
          <Affix offsetTop={0}>
                <Header className={styles.header}>
                    <div className={styles.mainContainer}>
                        <UserInfo account={this.state.user} handleClickLogout={this.handleClickLogout}/>
                        <Menu mode="horizontal" defaultSelectedKeys={['1']} className={styles.menu}>
                            <Menu.Item key="1">
                                <Link to="/posts">
                                    <Icon type="file-text" className={styles.icon}/>Posts
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to={`/user/${this.state.user}`}>
                                    <Icon type="user" className={styles.icon}/>User
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>
          </Affix>
      );
    }
  }

  export default HeaderLayout;
