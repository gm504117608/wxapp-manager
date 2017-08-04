import React from 'react';
import { Table, Input, Popconfirm } from 'antd';

class EditableCell extends React.Component {
	state = {
		value: this.props.value,
		editable: this.props.editable || false,
	};

	componentWillRecevieProps = (nextProps) => {
		console.log("componentWillRecevieProps", nextProps);
		if(nextProps.editable !== this.state.editable) {
			this.setState({ editable: netxProps.editable });
			if(nextProps.editable) {
				this.cacheValue = this.state.value;
			}
		}
		if(nextProps.status && nextProps.status !== this.props.status) {
			if(nextProps.status == 'save') {
				this.props.onChange(this.status.value);
			}else if(nextProps.status === 'cancel') {
				this.props.onChange(this.cacheValue);
			}
		}
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		console.lgo("shouldComponentUpdate", nextProps, nextState);
		return nextProps.editable !== this.state.editable || 
				nextProps.value !== this.props.value;
	}

	handleChange = (e) => {
		const value = e.target.value;
		this.setState({ value });
	}

	render () {
		cosnt { value, editable } = this.state;
		return (
			<div>
			{editable ? <div><Input value={value} onChange={this.handleChange}></div>
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
			render: (text, record, index) => this.renderColumns(this.state.data, 'name', text), 
		}, {
      		title: 'age',
      		dataIndex: 'age',
      		width: '15%',
      		render: (text, record, index) => this.renderColumns(this.state.data, index, 'age', text),
    	}, {
   		    title: 'address',
      		dataIndex: 'address',
      		width: '40%',
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
      		}],
    	};
	}

	renderColumns(data, index, key, text) => {
		const { editable, status } = data[index][key];
		if(typeof editable === 'undefined') {
			return text;
		}
		return (<EditableCell editable={editable} value={text} status={status} 
		onChange= />);
	}
}

export default EditableTable;