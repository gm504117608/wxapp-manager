/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
    state = {
        collapsed: false,
    };

    render() {
        return ( 
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                    <Icon type="user" />
                    <span className="nav-text">nav 1</span>
                 </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">nav 3</span>
                </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SiderCustom;