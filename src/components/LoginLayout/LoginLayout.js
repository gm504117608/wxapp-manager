'use strict';

import React from 'react';
import { Layout } from 'antd';
import FooterLayout from '../FooterLayout/FooterLayout'; 
import styles from './LoginLayout.css';

const {Content, Footer} = Layout;

class LoginLayout extends React.Component {
    
    render() { 
        return (
            <Layout className={styles.normal}>
                <div className={styles.background}></div>
                <Content className={styles.content}>
                    {this.props.children}
                </Content>
                <FooterLayout />
            </Layout>
        );
    }
}

export default LoginLayout;
