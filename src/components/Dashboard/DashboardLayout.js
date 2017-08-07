import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import b1 from '../../assets/hanzo.jpg';


class DashboardLayout extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4}>
                        <div >
                            <Card bordered={true}>
                                <div>
                                    <div>
                                        <Icon type="heart"/>
                                    </div>
                                    <div>
                                        <div>收藏</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <Card bordered={true}>
                                <div>
                                    <div>
                                        <Icon type="cloud" />
                                    </div>
                                    <div >
                                        <div>云数据</div>
                                        <h2>30122</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div >
                            <Card bordered={true}>
                                <div >
                                    <div >
                                        <Icon type="camera" />
                                    </div>
                                    <div>
                                        <div>照片</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div >
                            <Card bordered={true}>
                                <div >
                                    <div >
                                        <Icon type="mail" />
                                    </div>
                                    <div>
                                        <div >邮件</div>
                                        <h2>102</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div >
                            <Card bordered={true}>
                                <div >
                                    <h3>任务</h3>
                                    <small>10个已经完成，2个待完成，1个正在进行中</small>
                                </div>
                                <a ><Icon type="sync" /></a>
                                <Timeline>
                                    <Timeline.Item color="green">新版本迭代会</Timeline.Item>
                                    <Timeline.Item color="green">完成网站设计初版</Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>联调接口</p>
                                        <p>功能验收</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="#108ee9">
                                        <p>登录功能设计</p>
                                        <p>权限验证</p>
                                        <p>页面排版</p>
                                    </Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div >
                            <Card bordered={true}>
                                <div >
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <a ><Icon type="sync" /></a>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <div >
                            <Card bordered={false}>
                                <div >
                                    <h3>消息栏</h3>
                                    <a href="#" style={{float: 'right'}}><Icon type="sync" /></a>
                                </div>
                                <ul >
                                    <li >
                                        <a href="#" >
                                            <img src={b1} style={{width: '200px', heigth: '300px'}} alt="test" />
                                        </a>
                                        <div >
                                            <a href="#">鸣人</a>
                                            <span >终于当上火影了！</span>
                                        </div>
                                    </li>
                                    <li >
                                        <a href="#" >
                                            <img src={b1} style={{width: '200px', heigth: '300px'}} alt="test" />
                                        </a>
                                        <div >
                                            <a href="#" >佐助</a>
                                            <span >吊车尾~~</span>
                                        </div>
                                    </li>
                                    <li >
                                        <a href="#" >
                                            <img src={b1} style={{width: '200px', heigth: '300px'}} alt="test" />
                                        </a>
                                        <div >
                                            <a href="#" >小樱</a>
                                            <span >佐助，你好帅！</span>
                                        </div>
                                    </li>
                                    <li >
                                        <a href="#" >
                                            <img src={b1} style={{width: '200px', heigth: '300px'}} alt="test" />
                                        </a>
                                        <div >
                                            <a href="#" >雏田</a>
                                            <span >鸣人君。。。那个。。。我。。喜欢你..</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DashboardLayout;