'use strict';

import React from 'react';
import { Layout } from 'antd';
import styles from './FooterLayout.css';

const { Footer } = Layout;

class FooterLayout extends React.Component {
    state = {
        collapsed: false,
    };

    render() {
        return ( 
            <Footer className={styles.footer}>
                <span>Wxapp Manager ©2017 Created by GuoNiMa</span>
            </Footer>
        );
    }
}

export default FooterLayout;