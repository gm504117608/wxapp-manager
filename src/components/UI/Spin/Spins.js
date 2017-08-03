import React from 'react';
import { Spin, Row, Col, Card, Switch, Alert } from 'antd';

class ContainerSpin extends React.Component {
	state = { loading: false };

	toggle = (value) => {
		this.setState({ loading: value });
	}

	render() {
		return (
			<div>
				<Spin spinning={this.state.loading}>
					<Alert message="Alert message title" description="this is description for man and woman story." type="info"/>
				</Spin>
				<div style={{ marginTop: 16 }}>
          			Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
        		</div>
			</div>
		);
	}
}


class Spins extends React.Component {
	render () {
		return (
			<div> 
			<Row gutter={8}>
				<Col span={4}>
					<Card>
						<Spin />
					</Card>
				</Col>
				<Col span={4}>
					<Card>
						<Spin size="small"/>
						<Spin size="default"/>
						<Spin size="large"/>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<ContainerSpin />
					</Card>
				</Col>
			</Row>
			</div>
		);
	}
}

export default Spins;