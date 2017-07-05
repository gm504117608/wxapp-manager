import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import './IndexPage.css';


class IndexPage extends Component {

    render() {
        return (
            <MainLayout>
                {this.props.children}
            </MainLayout>
        );
    }
}

export default connect()(IndexPage);