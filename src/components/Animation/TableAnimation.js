import React from 'react';
import { Row, Col, Card, Table, Popconfirm, Button } from 'antd';
import styles from './animate.css'; 

class TableAnimation extends React.Component {
	constructor (props) {
		super(props);
		this.columns = [{
			title: 'name',
			dataIndex: 'name',
			width: '30%'
		},{
			title: 'age',
			dataIndex: 'age'
		},{
			title: 'address',
			dataIndex: 'address'
		},{
			title: 'operation',
			dataIndex: 'operation',
			render: (text, record, index) => {
				return ( 
					this.state.dataSource.length > 1 ?
					(
						<Popconfirm title="sure to delete?" onConfirm={() => this.onDelete(text, record, index)}>
							<a href="#">Delete</a>
						</Popconfirm>
					) : null
				);
			}
		}];
		this.state = {
			dataSource: [{
				key: 0,
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
			}, {
                key: 1,
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
            deleteIndex: -1
		};
	};

	onDelete = (text, record, index) => {
		console.log(text);
		console.log(record);
		console.log(index);
		const dataSource = this.state.dataSource;
		dataSource.splice(index, 1); {/* 从index开始 删除1行数据 */}
		this.setState({deleteIndex: record.key});
		setTimeout(() => {
			this.setState({dataSource: dataSource});
		}, 1000);
	};

	handleAdd = () => {
		const { count, dataSource } = this.state;
		const  newData= {
			key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
		};
		this.setState({
			dataSource: [newData, ...dataSource],
			count: count + 1,
		});
	};

	render() {
		const { dataSource } = this.state;
		const columns = this.columns;
		return(
			<div>
			<Row gutter={8}>
				<Col span={24}>
                    <Card bordered={false}>
                    	<Button onClick={this.handleAdd}>add</Button>
                    	<Table bordered dataSource={dataSource} columns={columns}
                    	rowClassName={(record, index) => {
							if (this.state.deleteIndex === record.key) {
								return (styles.animated + ' ' + styles.zoomOutLeft);
							}
                            return (styles.animated + ' ' + styles.fadeInRight);
                    	}} />
                    </Card>
                </Col>
            </Row>
			</div>
		);
	}
}

export default TableAnimation;