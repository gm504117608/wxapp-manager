import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Login.css';
import LoginLayout from '../../components/loginLayout/LoginLayout';
import logo from '../../assets/guonima.png';
import { IS_LOGIN_FLAG } from '../../utils/constant';


const FormItem = Form.Item;

class Login extends React.Component {

    state = {
        loading: false,
    };

    constructor (props) {
        super(props);
    }

    /**
     * 处理表单提交
     */
    handleSubmit = (e) => {
        this.setState({ loading: true });
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch({
                    type: 'app/login',
                    payload: values
                });
                const isLogin = window.localStorage.getItem(IS_LOGIN_FLAG);
                // 没有登录或者登录不成功去掉加载显示
                if (!isLogin){
                    this.setState({ loading: false });
                }
            } else {
                this.setState({ loading: false });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <LoginLayout>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img className={styles.logoImg} src={logo} />
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
