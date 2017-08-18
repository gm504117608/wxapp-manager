/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import styles from './SiderLayout.css';
import reqwest from 'reqwest';
import { SERVER_URL } from '../../utils/constant';

const { Sider } = Layout;

class SiderLayout extends Component {

    state = {
        collapsed: false,
        data: [],
        current: '100',
        openKey: []
    };

    constructor(props){
        super(props);
        this.selectMenu = {};
    }

    componentWillMount(){
        
    }

    componentDidMount() {
        this.getAllMenus();
    }

    componentDidUpdate() {
        
    }

    // 获取服务器数据
    getAllMenus = (params = {}) => {
        reqwest({
            url: '/api/menu',
            method: 'get',
            type: 'json',
            data: {},
        }).then((response) => {
            console.log("response", response);
            this.setState({
                data: response.data,
            });
            // 初始化界面菜单树的展示
            this.getOpenKeys(response.data, window.location.pathname);
            console.log("menu = ", this.selectMenu);
            const menuKey = this.selectMenu.menuKey;
            let length = menuKey.length;
            let openKey = [];
            let i = 0;
            let j = 1;
            while(i < length) {
                openKey.push(menuKey.substr(0, 3*j));
                i = i + 3;
                j++;
            }
            openKey.pop();
            console.log("openKey == ", openKey);
            this.setState({
                openKey: openKey, 
                current: menuKey,
            });

        }, (response, msg) => {
            console.log("error = response, msg:", response, msg);
        }).always((response) => {
            console.log("always: ", response);
        });
    }

    getOpenKeys = (data = [], router) => {
        data.find((item, index, array) => {
            let children = item.children;
            if (!children || children.length === 0) {
                if(item.router === router){
                    this.selectMenu = item;
                    return item;
                } 
            } else {
                this.getOpenKeys(children, router); 
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