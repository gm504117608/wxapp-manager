/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import styles from './SiderLayout.css';

const { Sider } = Layout;

class SiderLayout extends Component {
    state = {
        collapsed: false,
    };

    render() {
        return ( 
            <Sider trigger={null} className={styles.sider} collapsible collapsed={this.state.collapsed}>
                <Menu theme="white" mode="inline" defaultSelectedKeys={['dashboard']}>
                    <Menu.Item key="dashboard">
                        <Link to={'/dashboard'}><Icon type="mobile" /><span className="nav-text">首页</span></Link>
                    </Menu.Item>
                    <Menu.SubMenu key="system" title={<span><Icon type="mail" /><span>系统管理</span></span>}>
                        <Menu.Item key="user"><Link to="/user">用户管理</Link></Menu.Item>
                        <Menu.Item key="menu"><Link to="/menu">菜单管理</Link></Menu.Item>
                        <Menu.Item key="role"><Link to="/role">角色管理</Link></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="page" title={<span><Icon type="switcher" /><span className="nav-text">页面</span></span>}>
                        <Menu.Item key="login"><Link to={'/login'}>登录</Link></Menu.Item>
                        <Menu.Item key="register"><Link to={'/register'}>注册</Link></Menu.Item>
                        <Menu.Item key="notFound"><Link to={'/404'}>404</Link></Menu.Item>
                        <Menu.Item key="shop"><Link to={'/shop'}>店铺</Link></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="ui" title={<span><Icon type="scan" /><span className="nav-text">UI</span></span>}>
                        <Menu.Item key="buttons"><Link to={'/ui/buttons'}>按钮</Link></Menu.Item>
                        <Menu.Item key="icons"><Link to={'/ui/icons'}>图标</Link></Menu.Item>
                        <Menu.Item key="spins"><Link to={'/ui/spins'}>加载中</Link></Menu.Item>
                        <Menu.Item key="modals"><Link to={'/ui/modals'}>对话框</Link></Menu.Item>
                        <Menu.Item key="tabs"><Link to={'/ui/tabs'}>标签页</Link></Menu.Item>
                        <Menu.Item key="carousels"><Link to={'/ui/carousels'}>轮播图</Link></Menu.Item>
                        <Menu.Item key="wysiwyg"><Link to={'/ui/wysiwyg'}>富文本</Link></Menu.Item>
                        <Menu.Item key="drags"><Link to={'/ui/drags'}>拖拽</Link></Menu.Item>
                        <Menu.Item key="gallery"><Link to={'/ui/gallery'}>画廊</Link></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="animation" title={<span><Icon type="rocket" /><span className="nav-text">动画</span></span>}>
                        <Menu.Item key="basicAnimations"><Link to={'/animation/basicAnimations'}>基础动画</Link></Menu.Item>
                        <Menu.Item key="tableAnimation"><Link to={'/animation/tableAnimation'}>表格动画</Link></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="table" title={<span><Icon type="copy" /><span className="nav-text">表格</span></span>} >
                        <Menu.Item key="basicTable"><Link to={'/table/basicTable'}>基础表格</Link></Menu.Item>
                        <Menu.Item key="advancedTable"><Link to={'/table/advancedTable'}>高级表格</Link></Menu.Item>
                        <Menu.Item key="asynchronousTable"><Link to={'/table/asynchronousTable'}>异步表格</Link></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="form" title={<span><Icon type="edit" /><span className="nav-text">表单</span></span>}>
                        <Menu.Item key="basicForm"><Link to={'/form/basicForm'}>基础表单</Link></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="chart" title={<span><Icon type="area-chart" /><span className="nav-text">图表</span></span>}>
                        <Menu.Item key="echarts"><Link to={'/chart/echarts'}>echarts</Link></Menu.Item>
                        <Menu.Item key="recharts"><Link to={'/chart/recharts'}>recharts</Link></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="lifecycle">
                        <Link to={'/lifecycle'}><Icon type="api" /><span className="nav-text">react生命周期</span></Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SiderLayout;