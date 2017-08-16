import React from 'react';
import { Layout, BackTop, Row, Col  } from 'antd';
import { connect } from 'dva';
import SiderLayout from '../components/siderLayout/SiderLayout';
import FooterLayout from '../components/footerLayout/FooterLayout';
import HeaderLayout from '../components/headerLayout/HeaderLayout';
import styles from './App.css';
import { menuModels } from '../models/menu';

const { Content } = Layout;

class App extends React.Component {

    state = {
        collapsed: false,
    };

    constructor(props) {
        super(props);
    }

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
                        <SiderLayout/>
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