'use strict';

import React from 'react';
import styles from './Register.css';
import { Link } from 'dva/router';
import LoginLayout from '../../components/LoginLayout/LoginLayout';
import { connect } from 'dva';
import { Form, Input, Button, Icon } from 'antd';

class Register extends React.Component {

    state = {
        passwordDirty: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((error, {userName, email, password}) => {
            if (!error) {
                this.props.dispatch({
                    type: 'app/register',
                    payload: {userName, email, password}
                });
            }
        });
    }

    handlePasswordBlue = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.passwordDirty || !!value });
    }

    checkPassword = (rule, value, callback) => {
        console.log(callback);
        
        if (value && value !== this.props.form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    checkConfirm = (rule, value, callback) => {
        if (value && this.state.passwordDirty) {
            this.form.validateFields(['confirm'], {force: true});
        }
        callback();
    }

    render () {
        const getFieldDecorator = this.props.form.getFieldDecorator;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 17}
        };
        const tailFormItemLayout = {
            wrapperCol: { span: 17,offset: 6 }
        };

        return (
        <LoginLayout>
            <div className={styles.container}>
                <div className={styles.logo}>Welcome to Register!</div>
                <Form layout="horizontal" onSubmit={this.handleSubmit}>
                    <Form.Item {...formItemLayout} label="userName" hasFeedback>
                        {
                            getFieldDecorator('userName', {
                                rules: [{
                                    required: true,
                                    message: 'Please input your userName!'
                                }],
                            })(<Input addonBefore={<Icon type="user"/>}/>)
                        }
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="E-mail" hasFeedback >
                        {
                            getFieldDecorator('email', {
                                rules: [{
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },{
                                    required: true,
                                    message: 'Please input your E-mail!',
                                }],
                            })(<Input addonBefore={<Icon type="mail"/>}/>)
                        }
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Password" hasFeedback>
                        {
                            getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: 'Please input your password!',
                                },{
                                    validator: this.checkConfirm,
                                }],
                            })(<Input type="password" onBlur={this.handlePasswordBlue} addonBefore={<Icon type="lock"/>}/>)
                        }
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Confirm Password" hasFeedback>
                        {
                            getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, 
                                    message: 'Please confirm your password!',
                                }, {
                                    validator: this.checkPassword,
                                }],
                            })(<Input type="password" addonBefore={<Icon type="lock"/>}/>)
                        }
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" size="large">Register</Button>
                        <span className={styles.toOther}>Have an account? <Link to="/login">Log in!</Link></span>
                    </Form.Item>
                </Form>
            </div>
        </LoginLayout>);
    }
}

export default connect(() => ({}))(Form.create()(Register));