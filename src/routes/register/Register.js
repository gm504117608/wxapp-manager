import React from 'react';
import styles from './Register.css';
import { Link } from 'dva/router';
import LoginLayout from '../../components/loginLayout/LoginLayout';
import { connect } from 'dva';
import { Form, Input, Button, Icon, Row, Col } from 'antd';

class Register extends React.Component {

    state = {
        passwordDirty: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (!error) {
                this.props.dispatch({
                    type: 'app/register',
                    payload: values
                });
            }
        });
    }

    handlePasswordBlur = (e) => {
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
                    <Form.Item {...formItemLayout} label="手机号码" hasFeedback>
                        {
                            getFieldDecorator('mobile', {
                                rules: [{
                                    required: true,
                                    message: 'Please input your mobile!'
                                }],
                            })(<Input addonBefore={<Icon type="user"/>}/>)
                        }
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="密码" hasFeedback>
                        {
                            getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: 'Please input your password!',
                                },{
                                    validator: this.checkConfirm,
                                }],
                            })(<Input type="password" onBlur={this.handlePasswordBlur} addonBefore={<Icon type="lock"/>}/>)
                        }
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="确认密码" hasFeedback>
                        {
                            getFieldDecorator('confirmPassword', {
                                rules: [{
                                    required: true, 
                                    message: 'Please confirm your password!',
                                }, {
                                    validator: this.checkPassword,
                                }],
                            })(<Input type="password" addonBefore={<Icon type="lock"/>}/>)
                        }
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="验证码" hasFeedback>
                        <Row gutter={8}>
                            <Col span={12}>
                            {
                                getFieldDecorator('messageAuthCode', {
                                 rules: [{ 
                                    required: true, 
                                    message: 'Please input the captcha you got!' 
                                }],
                                })(<Input addonBefore={<Icon type="idcard"/>} />)
                            }
                            </Col>
                            <Col span={12}>
                                <Button size="large">获取验证码</Button>
                            </Col>
                        </Row>
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

export default connect()(Form.create()(Register));