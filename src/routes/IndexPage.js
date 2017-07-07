'use strict';

import React from 'react';
import { Layout, BackTop, Row, Col  } from 'antd';
import { connect } from 'dva';
import SiderLayout from '../components/SiderLayout/SiderLayout';
import FooterLayout from '../components/FooterLayout/FooterLayout';
import HeaderLayout from '../components/HeaderLayout/HeaderLayout';
import styles from './IndexPage.css';

const { Content } = Layout;

class IndexPage extends React.Component {

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
            <Layout className={styles.layoutContainer}>
                <HeaderLayout toggle={this.toggle} />
                <Row style={{width:'95%'}}>
                    <Col span={6} className={styles.content}>
                        <SiderLayout />
                    </Col>
                    <Col span={18}>
                        <Content className={styles.content}>
                            <div className={styles.mainContainer}>
                                <div className={styles.mainContent}>
                                    { this.props.children }
                                </div>
                            </div> 
                        </Content>
                    </Col>
                </Row>
                <Row>
                    <FooterLayout />
                </Row>
                <BackTop className={styles.backTop}/>
            </Layout>
        );
    }
}

export default connect()(IndexPage);