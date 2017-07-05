'use strict';

import React from 'react';
import { Layout } from 'antd';


const { Footer } = Layout;

class FooterCustom extends React.Component {
    state = {
        collapsed: false,
    };

    render() {
        return ( 
                <Footer style={{ textAlign: 'center' }}>
                    Wxapp Manager ©2017 Created by GuoNiMa
                </Footer>
        );
    }
}

export default FooterCustom;