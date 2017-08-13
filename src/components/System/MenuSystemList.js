import React from 'react';
import { Card, Col, Row, Tree } from 'antd';


class MenuSystem extends React.Component {

	render() {
		return (
			<div>
			<div style={{ padding: '20px' }}>
			<Row gutter={16}>
				<Col span={24}>
					<Card bordered title="查询条件">
					</Card>
				</Col>
			</Row>
			</div>
			<div style={{ padding: '20px' }}>
			<Row gutter={16}>
				<Col span={24}>
					<Card bordered title="菜单信息">
					</Card>
				</Col>
			</Row>
			</div>
			</div>
		);
	}

}

export default MenuSystem;