import React from 'react';
import { Table, Icon, Card, Row, Col } from 'antd';
import FilterOrderTables from './FilterOrderTables';

const { Column, ColumnGroup } = Table;

const columns = [{
	title: 'Name',
	dataIndex: 'name',
	key: 'name',
	render: (text) => <a href='#'>{text}</a>,
}, {
	title: 'Age',
	dataIndex: 'age',
	key: 'age',
}, {
	title: 'Address',
  	dataIndex: 'address',
  	key: 'address',
}, {
	title: 'Action',
	key: 'action',
	render: (text, record) => (
		<span> 
			<a href="#">Delete</a>
      		<span className="ant-divider"/>
      		<a href="#" className="ant-dropdown-link">
      			more<Icon type="down" />
      		</a>
		</span>
	)
}];

const dataSource = [{
	key: '1',
	name: 'John Brown',
	firstName: 'John',
	lastName: 'Brown',
	age: 32,
	address: 'new york no.1 lake park',
}, {
  	key: '2',
  	name: 'Jim Green',
  	age: 42,
  	address: 'London No. 1 Lake Park',
}, {
  	key: '3',
  	name: 'Joe Black',
  	firstName: 'Joe',
  	lastName: 'Black',
  	age: 32,
  	address: 'Sidney No. 1 Lake Park',
}, {
  	key: '4',
  	name: 'Joe Bank',
  	firstName: 'Joe',
  	lastName: 'Bank',
  	age: 32,
  	address: 'Sidney No. 1 Lake Park',
}];

// 循环自动生成数据
const data = [];
for (let i = 0; i < 48; i++) {
	data.push({
		key: i,
    	name: `Edward King ${i}`,
    	age: 32,
    	address: `Park Lane no. ${i}`,
	});
}

// 多选框的处理
const rowSelection = {

	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},

	getCheckboxProps: record => ({
		disabled: record.name === 'Joe Black', // Column configuration not to be checked
	}),
};

class BasicTables extends React.Component {
	render() {
		return(
			<div>
			<Row gutter={16}>
				<Col span={12}>
					<Card title="基础表格" border={true}>
						<Table rowSelection={rowSelection} columns={columns} dataSource={data} size="small" />
					</Card>
				</Col>
				<Col span={12}>
					<Card title="jsx风格表格" border={true} >
						<Table dataSource={dataSource} bordered size="middle">
						<ColumnGroup title="Name">
							<Column title="First Name" dataIndex="firstName" key="firstName" />
							<Column title="Last Name" dataIndex="lastName" key="lastName" />
						</ColumnGroup>
						<Column title="Age" dataIndex="age" key="age" />
    					<Column title="Address" dataIndex="address" key="address" />
    					<Column  title="Action" key="action" render={(text, record) => (
							<span> 
								<a href="#">Delete</a>
      							<span className="ant-divider"/>
      							<a href="#" className="ant-dropdown-link">
      								more<Icon type="down" />
      							</a>
						 	</span>
    					)} />
						</Table>
					</Card>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={12}>
					<Card title="可控的筛选和排序" border={true}>
						<FilterOrderTables />
					</Card>
				</Col>
			</Row>
			</div>
		);
	}
}

export default BasicTables;