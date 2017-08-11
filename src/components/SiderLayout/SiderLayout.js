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
        data: [],
    };

    // 获取服务器数据
    getAllMenus = (params = {}) => {
        reqwest({
            url: 'http://localhost:8080/api/menu',
            method: 'get',
            type: 'json',
            data: {},
        }).then((response) => {
            console.log("response", response);
            this.setState({
                data: response.data,
            });
        }, (response, msg) => {
            console.log("error = response, msg:", response, msg);
        }).always((response) => {
            console.log("always: ", response);
        });
    }

    componentDidMount() {
        this.getAllMenus();
    }

    createChildrenMenu = (item) => {
        return (
            <Menu.SubMenu key={item.menuKey} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                { this.createMenu(item.children) }
            </Menu.SubMenu>);
    }

    createMenu = (data = []) => {
        const result = data.map((item, index, array) => {
            let children = item.children;
            if (!children || children.length === 0) {
                return (
                    <Menu.Item key={ item.menuKey }>
                        <Link to={ item.router }><Icon type={  item.icon } />
                        <span className="nav-text">{ item.name }</span></Link>
                    </Menu.Item>);
            } else {
                return this.createChildrenMenu(item);
            }
        });
        return result;
    }

    render() {
        const { data } = this.state;
        const result = this.createMenu(data);
        console.log("result", result);

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