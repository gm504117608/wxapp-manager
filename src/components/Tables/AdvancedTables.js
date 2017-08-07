import React from 'react';
import { Table, Icon, Card, Row, Col } from 'antd';
import EditTables from './EditTables';

const { Column, ColumnGroup } = Table;

const columns = [{
	title: 'Name',
	dataIndex: 'name',
	key: 'name',
}, {
	title: 'Age',
	dataIndex: 'age',
	key: 'age',
}, {
	title: 'Address',
  	dataIndex: 'address',
  	key: 'address',
}];

// 循环自动生成数据
const data = [];
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
    	name: `Edward King ${i}`,
    	age: 32,
    	address: `Park Lane no. ${i}`,
	});
}


const colFixColumns = [
  	{ title: 'Full Name', width: 80, dataIndex: 'name', key: 'name', fixed: 'left' },
  	{ title: 'Age', width: 50, dataIndex: 'age', key: 'age', fixed: 'left' },
  	{ title: 'Column 1', dataIndex: 'address', key: '1' },
  	{ title: 'Column 2', dataIndex: 'address', key: '2' },
  	{ title: 'Column 3', dataIndex: 'address', key: '3' },
  	{ title: 'Column 4', dataIndex: 'address', key: '4' },
  	{ title: 'Column 5', dataIndex: 'address', key: '5' },
  	{ title: 'Column 6', dataIndex: 'address', key: '6' },
  	{ title: 'Column 7', dataIndex: 'address', key: '7' },
  	{ title: 'Column 8', dataIndex: 'address', key: '8' },
  	{
    	title: 'Action',
    	key: 'operation',
   		fixed: 'right',
    	width: 70,
    	render: () => <a href="#">action</a>,
  	},
];

const colFixData = [{
  	key: '1',
  	name: 'John Brown',
  	age: 32,
  	address: 'New York Park',
}, {
  	key: '2',
  	name: 'Jim Green',
  	age: 40,
  	address: 'London Park',
}];

class AdvancedTables extends React.Component {
	render() {
		return(
			<div>
			<Row gutter={16}>
				<Col span={12}>
					<Card title="头固定表格"  bordered={true}>
						<Table columns={columns} dataSource={data} size="small" 
						pagination={{pageSize: 30}} scroll={{y: 240}}/>
					</Card>
				</Col>
				<Col span={12}>
					<Card title="列固定表格" bordered={true} >
						<Table columns={colFixColumns} dataSource={colFixData} size="small" 
						pagination={{pageSize: 10}} scroll={{x: 1200}}/>
					</Card>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={24}>
					<Card title="可编辑表格" bordered={true}>
						<EditTables />
					</Card>
				</Col>
			</Row>
			</div>
		);
	}
}

export default AdvancedTables;