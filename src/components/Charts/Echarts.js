import React from 'react';
import { Card, Row, Col } from 'antd';
import EchartsArea from './EchartsArea';
import EchartsPie from './EchartsPie';
import EchartsTree from './EchartsTree';

class Echarts extends React.Component {
	render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="区域图" bordered={false}>
                            <EchartsArea />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="饼图" bordered={false}>
                            <EchartsPie />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="树状图" bordered={false}>
                            <EchartsTree />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Echarts;