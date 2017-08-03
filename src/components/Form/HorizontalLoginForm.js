import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasError(fieldsError) {
	console.log(fieldsError);
	return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
	componentDidMount() {
		console.log("componentDidMount");
		this.props.form.validateFields();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err){
				console.log("received values of form: ", values);
			}
		});
	}

	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const userNameError = isFieldTouched('userName') && getFieldError("userName");
		const passwordError = isFieldTouched('password') && getFieldError('password');

		return (
			<Form layout="inline" onSubmit={this.handleSubmit}>
				<FormItem validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
				{getFieldDecorator('userName', {
					rules:[{required: true, message: 'Please input your userName!'}],
				})(
					<Input prefix={<Icon type="user" style={{ fontSize: 13}} />} placeholder="userName"/>
				)}
				</FormItem>
				<FormItem validateStatus={passwordError ? "error" : ""} help={passwordError || ""}>
				{getFieldDecorator('password', {
					rules: [{required: true, message: 'Please input your password!'}],	
				})(
					<Input prefix={<Icon type="lock" style={{ fontSize: 13}} />} type="passwprd" placeholder="password" />
				)} 
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" disabled={hasError(getFieldsError())}>
						log in 
					</Button>
				</FormItem>
			</Form>
		);
	}
}

const HorizontalForm = Form.create()(HorizontalLoginForm);

export default HorizontalForm;