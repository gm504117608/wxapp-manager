'use strict';

import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Login.css';
import LoginLayout from '../../components/LoginLayout/LoginLayout';
import blogLogo from '../../assets/dog_48px_1182381_easyicon.net.png';


const FormItem = Form.Item;

class Login extends React.Component {

    state = {
        loading: false
    };

    /**
     处理表单提交
     */
    handleSubmit = (e) => {
        this.setState({ loading: true });
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch({
                    type: 'app/auth',
                    payload: values
                });
            } else {
                this.setState({ loading: false });
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <LoginLayout>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img className={styles.logoImg} src={blogLogo} alt="my blog"/>
                        <span>My GuoNiMa!</span>
                    </div>
                    <Form onSubmit={this.handleSubmit} >
                        <FormItem>
                        {
                            getFieldDecorator('mobile', {
                                rules: [{
                                    required: true,
                                    message: '请输入手机号码!'
                                }],
                            })
                            (<Input prefix={<Icon type="user" />} placeholder="手机号码"/>)
                        }
                        </FormItem>
                        <FormItem>
                        {
                            getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: '请输入密码!'
                                }],
                            })
                            (<Input prefix={<Icon type="lock"/>} type="password" placeholder="密码"/>)
                        }
                        </FormItem>
                        <FormItem>
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            }) 
                            (<Checkbox>记住我</Checkbox>)
                        }
                        <span className={styles.toOther}><Link to="/forgot">忘记密码</Link></span>
                        <Button type="primary" htmlType="submit" className={styles.button} loading={this.state.loading}>
                            登录
                        </Button>
                        <span>Or <Link to="/register">立即注册</Link></span>
                        </FormItem>
                     </Form>
                </div>
            </LoginLayout>
        );
    }
}

export default connect()(Form.create()(Login));
