import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import SiderCustom from '../components/SiderCustom';
import HeaderCustom from '../components/HeaderCustom';
import styles from './IndexPage.css';

const {Content, Footer} = Layout;


class IndexPage extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className="ant-layout-has-sider">
              <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />
              <Layout>
                <HeaderCustom toggle={this.toggle} />
                <Content style={{
                margin: '0 16px',
                overflow: 'initial'
            }}>
                  {this.props.children}
                </Content>
                <Footer style={{
                textAlign: 'center'
            }}>
                  React-Admin ©2017 Created by 865470087@qq.com
                </Footer>
              </Layout>
            </Layout>
        );
    }
}

export default connect()(IndexPage);