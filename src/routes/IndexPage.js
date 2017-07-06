'use strict';

import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import SiderCustom from '../components/SiderCustom';
import FooterLayout from '../components/FooterLayout/FooterLayout';
import HeaderCustom from '../components/HeaderCustom';
import styles from './IndexPage.css';

const { Content } = Layout;

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
            <Layout className={styles.normal}>
                <div className={styles.background}></div>
                <SiderCustom collapsed={this.state.collapsed} />
                <Layout>
                    <HeaderCustom toggle={this.toggle} />
                    <Content className={styles.content}>
                        { this.props.children } guonima
                    </Content>
                </Layout>
                <FooterLayout />
            </Layout>
        );
    }
}

export default connect()(IndexPage);