import React from 'react';
import { Layout, BackTop, Row, Col  } from 'antd';
import { connect } from 'dva';
import SiderLayout from '../components/SiderLayout/SiderLayout';
import FooterLayout from '../components/FooterLayout/FooterLayout';
import HeaderLayout from '../components/HeaderLayout/HeaderLayout';
import styles from './App.css';

const { Content } = Layout;

class App extends React.Component {

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
                <HeaderLayout toggle={this.toggle} />
                <Row gutter={8} style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col span={6}>
                        <SiderLayout />
                    </Col>
                    <Col span={18}>
                        <Content className={styles.content}>
                            { this.props.children }
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

export default connect()(App);