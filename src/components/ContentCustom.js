'use strict';

import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class ContentCustom extends React.Component {

	state = {
        collapsed: false,
    };

    render() {
        return (
            <Content>
       			{ this.props.children } guonima
     		</Content>
        );
    }
}

export default ContentCustom;