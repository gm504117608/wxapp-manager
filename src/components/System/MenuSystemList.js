import React from 'react';
import { Table, Card, Col, Row, Tree } from 'antd';
import { connect } from 'dva';

const columns = [{
  	title: '菜单名称',
  	dataIndex: 'name',
}, {
  	title: '菜单key值',
  	dataIndex: 'menuKey',
}, {
  	title: '路由',
  	dataIndex: 'router',
}, {
  	title: '图标',
  	dataIndex: 'icon',
}];

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
						<Table dataSource={this.props.menu} columns={columns} bordered />
					</Card>
				</Col>
			</Row>
			</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	console.log("mapStateToProps(state)", state);
  	const { menu } = state;
  	console.log(menu);
  	return {
    	menu,
  	};
}


export default connect(mapStateToProps)(MenuSystem);