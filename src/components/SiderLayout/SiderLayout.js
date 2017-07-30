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
                    <Menu.Item key="dashboard">
                        <Link to={'/dashboard'}><Icon type="mobile" /><span className="nav-text">首页</span></Link>
                    </Menu.Item>
                    <SubMenu key="system" title={<span><Icon type="mail" /><span>系统管理</span></span>}>
                        <MenuItem key="user"><Link to="/user">用户信息</Link></MenuItem>
                        <MenuItem key="role"><Link to="/role">角色管理</Link></MenuItem>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="switcher" /><span className="nav-text">页面</span></span>}>
                        <Menu.Item key="/login"><Link to={'/login'}>登录</Link></Menu.Item>
                        <Menu.Item key="/register"><Link to={'/register'}>注册</Link></Menu.Item>
                        <Menu.Item key="/notFound"><Link to={'/404'}>404</Link></Menu.Item>
                        <Menu.Item key="/shop"><Link to={'/shop'}>店铺</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/ui" title={<span><Icon type="scan" /><span className="nav-text">UI</span></span>}>
                        <Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>按钮</Link></Menu.Item>
                        <Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>图标</Link></Menu.Item>
                        <Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>加载中</Link></Menu.Item>
                        <Menu.Item key="/app/ui/modals"><Link to={'/app/ui/modals'}>对话框</Link></Menu.Item>
                        <Menu.Item key="/app/ui/notifications"><Link to={'/app/ui/notifications'}>通知提醒框</Link></Menu.Item>
                        <Menu.Item key="/app/ui/tabs"><Link to={'/app/ui/tabs'}>标签页</Link></Menu.Item>
                        <Menu.Item key="/app/ui/banners"><Link to={'/app/ui/banners'}>轮播图</Link></Menu.Item>
                        <Menu.Item key="/app/ui/wysiwyg"><Link to={'/app/ui/wysiwyg'}>富文本</Link></Menu.Item>
                        <Menu.Item key="/app/ui/drags"><Link to={'/app/ui/drags'}>拖拽</Link></Menu.Item>
                        <Menu.Item key="/app/ui/gallery"><Link to={'/app/ui/gallery'}>画廊</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/animation" title={<span><Icon type="rocket" /><span className="nav-text">动画</span></span>}>
                        <Menu.Item key="/app/animation/basicAnimations"><Link to={'/app/animation/basicAnimations'}>基础动画</Link></Menu.Item>
                        <Menu.Item key="/app/animation/exampleAnimations"><Link to={'/app/animation/exampleAnimations'}>动画案例</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/table" title={<span><Icon type="copy" /><span className="nav-text">表格</span></span>} >
                        <Menu.Item key="/app/table/basicTable"><Link to={'/app/table/basicTable'}>基础表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/advancedTable"><Link to={'/app/table/advancedTable'}>高级表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/asynchronousTable"><Link to={'/app/table/asynchronousTable'}>异步表格</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/form" title={<span><Icon type="edit" /><span className="nav-text">表单</span></span>}>
                        <Menu.Item key="/app/basicForm"><Link to={'/app/form/basicForm'}>基础表单</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/chart" title={<span><Icon type="area-chart" /><span className="nav-text">图表</span></span>}>
                        <Menu.Item key="/app/chart/echarts"><Link to={'/app/chart/echarts'}>echarts</Link></Menu.Item>
                        <Menu.Item key="/app/chart/recharts"><Link to={'/app/chart/recharts'}>recharts</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default SiderLayout;