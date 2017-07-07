/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import styles from './SiderLayout.css';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class SiderLayout extends Component {
    state = {
        collapsed: false,
    };

    render() {
        return ( 
            <Sider trigger={null} className={styles.sider} collapsible collapsed={this.state.collapsed}>
                <Menu theme="white" mode="inline" defaultSelectedKeys={['1']}>
                <SubMenu key="system" title={<span><Icon type="mail" /><span>系统管理</span></span>}>
                    <MenuItem key="user"><Link to="/index">用户信息</Link></MenuItem>
                    <MenuItem key="role"><Link to="/login">角色管理</Link></MenuItem>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>菜单二</span></span>}>
                    <MenuItem key="3"><Link to="/dashboard">菜单二1</Link></MenuItem>
                    <MenuItem key="4"><Link to="22">菜单二2</Link></MenuItem>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>菜单三</span></span>}>
                    <MenuItem key="5"><Link to="31">菜单三1</Link></MenuItem>
                    <MenuItem key="6"><Link to="32">菜单三2</Link></MenuItem>
                    <MenuItem key="7"><Link to="33">菜单三3</Link></MenuItem>
                    <MenuItem key="8"><Link to="34">菜单三4</Link></MenuItem>
                </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default SiderLayout;