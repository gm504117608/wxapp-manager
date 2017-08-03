import React from 'react';
import { Card, Row, Col } from 'antd';
import HorizontalForm from './HorizontalLoginForm';
import TimeRelatedForm from './TimeRelatedForm';
import PopForm from './PopForm';
import CustomForm from './CustomForm';


class BasicForm extends React.Component {
	state = {

	};

	render(){
		return (
		<div>
            <Row gutter={16}>
                <Col span={12}>
                    <div>
                        <Card title="水平表单" bordered={false}>
                            <HorizontalForm />
                        </Card>
                    </div>
                </Col>
   				<Col span={12}>
                    <div>
                        <Card title="时间类表单" bordered={false}>
                            <TimeRelatedForm />
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <div>
                        <Card title="弹出框表单" bordered={true}>
                            <PopForm />
                        </Card>
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <Card title="自定义表单" bordered={true}>
                            <CustomForm />
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
		);
	}
}

export default BasicForm;