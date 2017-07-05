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
    /**
     处理表单提交
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log(this);
                console.log(this.props);

                this.props.dispatch({
                    type: 'app/auth',
                    payload: values
                });
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
                            getFieldDecorator('userName', {
                                rules: [{
                                    required: true,
                                    message: '请输入用户名!'
                                }],
                            })
                            (<Input prefix={<Icon type="user" />} placeholder="用户名"/>)
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
                            (<Checkbox disabled>记住我</Checkbox>)
                        }
                        <span className={styles.toOther}>Or <Link to="/register">register now!</Link></span>
                        <Button type="primary" htmlType="submit" className={styles.button}>
                            登录
                        </Button>
                        </FormItem>
                     </Form>
                </div>
            </LoginLayout>
        );
    }
}


export default connect()(Form.create()(Login));
