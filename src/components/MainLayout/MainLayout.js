'use strict';

import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderCustom from '../SiderCustom';
import FooterCustom from '../FooterCustom';
import HeaderCustom from '../HeaderCustom';
import ContentCustom from '../ContentCustom';
import './MainLayout.css';


class MainLayout extends Component {

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
            <Layout>
                <SiderCustom collapsed={this.state.collapsed} />
                <Layout>
                    <HeaderCustom toggle={this.toggle} />
                    <ContentCustom />
                </Layout>
                <FooterCustom />
            </Layout>
        );
    }
}

export default MainLayout;