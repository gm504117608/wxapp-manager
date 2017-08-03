import React from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create() (
	(props) => {
		const { visible, onCancel, onCreate, form } = props;
		const { getFieldDecorator } = form;
		return (
			<Modal visible={visible} title="create a new collection" okText="create" onCancel={onCancel} onOk={onCreate}>
			<Form layout="vertical">
				<FormItem label="title">
				{getFieldDecorator('title', {
					rules: [{required: true, message: 'please imput the title of collection.'}],
				})(<Input />)}
				</FormItem>
				<FormItem label="description">
				{getFieldDecorator('description')(<Input type='textarea' />)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('modifier', 
						{initialValue: 'public',})(
						<Radio.Group>
							<Radio value="public">Public</Radio>
							<Radio value="private">Private</Radio>
						</Radio.Group>
					)}
				</FormItem>
			</Form>
			</Modal>
		);
	}
);


class CollectionsPage extends React.Component {
	state = {
		visible: false,
	};

	showModal = () => {
		this.setState({ visible: true });
	}

	handleCancel = () => {
		this.setState({  visible: false });
	}

	handleCreate = () => {
		const form = this.form;
		form.validateFields((err, values) => {
			if(err){
				return;
			}
			console.log("tian ru de zhi : ", values);
			form.resetFields();
			this.setState({ visible: false });
		});
	}

	saveFormRef = (form) => {
		this.form = form;
	}

	render() {
		return (
			<div>
				<Button type='primary' onClick={this.showModal}>pop windows</Button>
				<CollectionCreateForm 
				ref={this.saveFormRef} 
				visible={this.state.visible}
				onCancel={this.handleCancel}
				onCreate={this.handleCreate}
				/>
			</div>
		);
	}
}

export default CollectionsPage;