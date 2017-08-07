import React from 'react';
import { Table, Input, Popconfirm } from 'antd';

class EditableCell extends React.Component {
	state = {
		value: this.props.value,
		editable: this.props.editable || false,
	};

	componentWillReceiveProps = (nextProps) => {
		console.log("componentWillRecevieProps", nextProps);
		if(nextProps.editable !== this.state.editable) {
			this.setState({ editable: nextProps.editable });
			if(nextProps.editable) {
				this.cacheValue = this.state.value;
			}
		}
		if(nextProps.status && nextProps.status !== this.props.status) {
			if(nextProps.status === 'save') {
				this.props.onChange(this.state.value);
			}else if(nextProps.status === 'cancel') {
				this.setState({ value: this.cacheValue });
				this.props.onChange(this.cacheValue);
			}
		}
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		console.log("shouldComponentUpdate", nextProps, nextState);
		return nextProps.editable !== this.state.editable || 
				nextState.value !== this.state.value;
	}

	handleChange = (e) => {
		console.log("handleChange :", e);
		console.log("handleChange value :", e.target.value);
		this.setState({ value: e.target.value });
	}

	render () {
		const { value, editable } = this.state;
		console.log("render", value, editable);
		return (
			<div>
			{editable ? <div><Input type="text" value={value} onChange={this.handleChange} /></div>
				: <div className="editable-row-text">{value.toString() || ' '}</div>}
			</div>
		);
	}
}


class EditableTable extends React.Component {
	constructor(props) {
		super(props);
		this.columns = [{
			title: 'name',
			dataIndex: 'name',
			width: '25%',
			render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text), 
		}, {
      		title: 'age',
      		dataIndex: 'age',
      		width: '10%',
      		render: (text, record, index) => this.renderColumns(this.state.data, index, 'age', text),
    	}, {
   		    title: 'address',
      		dataIndex: 'address',
      		width: '35%',
     		render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
    	},{
    		title: 'operation',
    		dataIndex: 'operation',
    		render: (text, record, index) => {
    			const { editable } = this.state.data[index].name;
    			return (
    				<div className="editable-row-operations">
    				{ editable ? <span>
    					<a onClick={() => this.editDone(index, 'save')}>Save</a>
      					<span className="ant-divider"/>
    					<Popconfirm title="sure of cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
    						<a>cancel</a>
    					</Popconfirm>
    				</span>
    					: <span>
                  			<a onClick={() => this.edit(index)}>Edit</a>
                		</span>}
    				</div>
    			)
    		}
    	}];

    	this.state = {
      		data: [{
        		key: '0',
        		name: {
          			editable: false,
          			value: 'Edward King 0',
        		},
        		age: {
         	 		editable: false,
          			value: '32',
        		},
        		address: {
         			value: 'London, Park Lane no. 0',
       			},
      		}, {
        		key: '1',
        		name: {
          			editable: true,
          			value: 'Edward King 1',
        		},
        		age: {
         	 		editable: false,
          			value: '35',
        		},
        		address: {
         			value: 'London, Park Lane no. 1',
       			},
      		}],
    	};
	}

	renderColumns = (data, index, key, text) => {
		const { editable, status } = data[index][key];
		if(typeof editable === 'undefined') {
			return text;
		}
		return (<EditableCell editable={editable} value={text} status={status} 
		onChange={value => this.handleChange(key, index, value)} />);
	}

	handleChange = (key, index, value) => {
		const { data } = this.state;
    	data[index][key].value = value;
    	this.setState({ data });
    }

    edit = (index) => { 
		const { data } = this.state;
		Object.keys(data[index]).forEach((item) => {
			if (data[index][item] && typeof data[index][item].editable !== 'undefined'){
				data[index][item].editable = true;
			}
		});
		this.setState({ data });
	}

	editDone = (index, type) => {
		const { data }= this.state;
		Object.keys(data[index]).forEach((item) => {
      		if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        		data[index][item].editable = false;
        		data[index][item].status = type;
      		}
   		});
   		this.setState({ data }, () => {
   			Object.keys(data[index]).forEach((item) => {
        		if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
          			delete data[index][item].status;
        		}
      		});
   		});
	}

	render (){
		const { data } = this.state;
		const dataSource = data.map((item) => {
			const obj = {};
      		Object.keys(item).forEach((key) => {
        		obj[key] = key === 'key' ? item[key] : item[key].value;
      		});
      		return obj;
		});
		const columns = this.columns;
		return <Table bordered dataSource={dataSource} columns={columns}/>
	}
}

export default EditableTable;