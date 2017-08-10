/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import styles from './SiderLayout.css';
import reqwest from 'reqwest';

const { Sider } = Layout;

class SiderLayout extends Component {

    state = {
        collapsed: false,
        menu: []
    };

// 获取服务器数据
  fetch = (params = {}) => {
    reqwest({
      url: 'http://localhost:8080/api/menu',
      method: 'get',
      type: 'json',
      data: {},
    }).then((response) => {
      this.setState({
        menu: response.data,
      });
    }, (response, msg) => {
      console.log("error = response, msg:", response, msg);
    }).always((response) => {
      console.log("always: ", response);
    });
  }

  componentDidMount() {
    this.fetch();
  }

    render() {
        const { menu } = this.state;
        const result = menu.map((item) => {
            if (item.children) {
                <Menu.SubMenu key={item.menuKey} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                    {item.children.map((child) => {
                        <Menu.Item key={child.menuKey}><Link to={child.router}>{child.name}</Link></Menu.Item>
                    })}
                </Menu.SubMenu>
            } else {
                <Menu.Item key={item.menuKey}>
                    <Link to={item.router}><Icon type={item.icon} />
                    <span className="nav-text">{item.name}</span></Link>
                </Menu.Item>
            }
        });

        return ( 
            <Sider trigger={null} className={styles.sider} collapsible collapsed={this.state.collapsed}>
                <Menu theme="white" mode="inline" defaultSelectedKeys={['dashboard']}>
                    { result }
                </Menu>
            </Sider>
        );
    }
}

export default SiderLayout;