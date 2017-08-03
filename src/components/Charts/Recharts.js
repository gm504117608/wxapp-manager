
import React from 'react';
import { Card, Row, Col } from 'antd';
import RechartsPie from './RechartsPie';
import Legend from './Legend';
import Curve from './Curve';

class Recharts extends React.Component {
	render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="饼图" bordered={false}>
                            <RechartsPie />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="方型图" bordered={false}>
                            <Legend />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="曲线图" bordered={false}>
                            <Curve />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Recharts;