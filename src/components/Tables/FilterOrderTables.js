import React from 'react';
import { Table, Button, Card, Icon, Input } from 'antd';

const { Column, ColumnGroup } = Table;

// 循环自动生成数据
const data = [];
for (let i = 0; i < 48; i++) {
	data.push({
		key: i,
    	name: `Edward King ${i}`,
    	age: parseInt(10 + i, 10),
    	address: `Park Lane no. ${i}`,
    	description: `my name is Edward King ${i}, my home address is Park Lane no. ${i}. welcome to my home happy.`
	});
}

class FilterOrderTables extends React.Component {
	state = {
		filteredInfo: null,
		sortedInfo: null,
		filterDropdownVisible: false,
		data,
		searchText: '',
		filtered: false,
	};

	handleChange = (pagination, filters, sorter) => {
		console.log('various parameters: ', pagination, filters, sorter);
		this.setState({
			filteredInfo: filters,
			sortedInfo: sorter,
		});
	}

	clearFilters = () => {
		this.setState({filteredInfo: null});
	}

	clearAll = () => {
		this.setState({
      		filteredInfo: null,
      		sortedInfo: null,
    	});
	}

	setAgeSort = () => {
		this.setState({
			sortedInfo: {
				order: 'descend',
				columnKey: 'age',
			}
		});
	}

	onInputChange = (e) => {
		this.setState({ searchText: e.target.value });
	}

	onSearch = () => {
		const { searchText } = this.state;
		const reg = new RegExp(searchText: 'gi');
		this.setState({
			filterDropdownVisible: false,
			filtered: !!searchText,
			data: data.map((record) => {
				const match = record.name.match(reg);
				if(!match) {
					return null;
				}
				return {
					...record,
					name: (
						<span>
						{record.name.split(reg).map((text, i) => (
							i>0 ? [<span className="highlight">{match[0]}</span>, text] : text))}
						</span>
					)
				}
			}).filter(record => !!record),
		});
	}

	render() {
		let { sortedInfo, filteredInfo } = this.state;
		sortedInfo = sortedInfo || {};
		filteredInfo = filteredInfo || {};
		const columns = [{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			filterDropdown: (
				<div className="custom-filter-dropdown">
					<Input size="small" ref={ele => this.searchInput = ele} placeholder="Search name"
					value={this.state.searchText} onChange={this.onInputChange} onPressEnter={this.onSearch} />
					<Button type="primary" size="small" onClick={this.onSearch} >search</Button>
				</div>
			),
			filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
			filterDropdownVisible: this.state.filterDropdownVisible,
			onFilterDropdownVisibleChange: (visible) => {
				this.setState({
					filterDropdownVisible: visible,
        			}, () => this.searchInput.focus()
				);
			}
		}, {
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			sorter: (a, b) => a.age - b.age,
			sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
		}, {
      		title: 'Address',
      		dataIndex: 'address',
     		key: 'address',
      		filters: [
        		{ text: 'London', value: 'London' },
        		{ text: 'New York', value: 'New York' },
      		],
      		filteredValue: filteredInfo.address || null,
      		onFilter: (value, record) => record.address.includes(value),
      		sorter: (a, b) => a.address.length - b.address.length,
      		sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    	}];
		return(
			<div>
				<Card>
					<Button onClick={this.setAgeSort}>sort age</Button>
					<Button onClick={this.clearFilters}>clear filter</Button>
					<Button onClick={this.clearAll}>clear filters and sorters</Button>
				</Card>
				<Table columns={columns} dataSource={this.state.data} onChange={this.handleChange} 
				expandedRowRender={record => <p>{record.description}</p>}/>
			</div>
		);
	}
}

export default FilterOrderTables;