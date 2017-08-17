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
        current: 'dashboard',
        openKey: []
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

    componentDidUpdate() {
        // 获取需要展开的菜单数据
        const { data, current } = this.state;
        const temp = this.getOpenKeys(data, current);
        console.log("temp = ", temp, current, data);
    }

    getOpenKeys = (data = [], current) => {
        data.filter((item, index, array) => {
            let children = item.children;
            if (!children || children.length === 0) {
                if(item.menuKey === current){
                    return item;
                }
            } else {
               this.getOpenKeys(children, current); 
            }
        });
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

    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
    }

    handleOpenChange = (openKeys) => {
        console.log('handleOpenChange: ', openKeys);
        this.setState({ openKey: openKeys });
    }

    componentWillMount(){
        console.log("pathname", window.location.pathname);
        let pathArray = window.location.pathname.split("/");
        let size = pathArray.length;
        this.setState({
            current: pathArray[size - 1],
        });
    }

    render() {
        const { data } = this.state;
        const result = this.createMenu(data);

        return ( 
            <Sider trigger={null} className={styles.sider} collapsible collapsed={this.state.collapsed}>
                <Menu theme="white" mode="inline" 
                    selectedKeys={[this.state.current]}
                    onClick={this.handleClick}
                    openKeys={this.state.openKey}
                    onOpenChange={this.handleOpenChange}>
                    { result }
                </Menu>
            </Sider>
        );
    }
}

export default SiderLayout;