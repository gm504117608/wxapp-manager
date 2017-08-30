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

	queryMenus = (e) => {
		e.preventDefault();
    	this.props.form.validateFields((err, values) => {
    		this.props.dispatch({
            	type: 'getAllMenus',
            	payload: query
        	});
    	});
	}

	render() {

		const formItemLayout = {
     		labelCol: { span: 5 },
     		wrapperCol: { span: 19 },
    	};

		return (
			<div>
			<div style={{ padding: '20px' }}>
			<Row gutter={16}>
				<Col span={24}>
					<Card bordered title="查询条件">
					<Form layout="inline" onSubmit={this.queryMenus}>
						<FormItem {...formItemLayout} label="菜单名称">
							{getFieldDecorator('name')(
              				<Input placeholder="placeholder" />
            				)}
						</FormItem>
						<FormItem {...formItemLayout} label="菜单key">
							{getFieldDecorator('menuKey')(
              				<Input placeholder="placeholder" />
            				)}
						</FormItem>
						<FormItem {...formItemLayout} label="路由">
							{getFieldDecorator('router')(
              				<Input placeholder="placeholder" />
            				)}
						</FormItem>
						<Button type="primary" htmlType="submit">查询</Button>
					</Form>
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