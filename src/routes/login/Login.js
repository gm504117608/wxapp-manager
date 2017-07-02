import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import './Login.css';

const FormItem = Form.Item;

class LoginComponent extends React.Component {
    /**
     处理表单提交
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                dispatch({
                    type: 'api/login',
                    payload: values
                });
            }
        });
    };

    gitHub = () => {
        location.href = 'https://www.baidu.com';
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div className="login">
        <div className="login-form">
          <div className="login-logo">
            <span>React Admin</span>
          </div>
          <Form onSubmit={this.handleSubmit} style={{
                maxWidth: '300px'
            }}>
            <FormItem>
              {
            getFieldDecorator('userName', {
                rules: [{
                    required: true,
                    message: '请输入用户名!'
                }],
            })(
                <Input prefix={<Icon type="user" style={{
                    fontSize: 13
                }}/>} placeholder="用户名"/>)
            }
            </FormItem>
            <FormItem>
              {
            getFieldDecorator('password', {
                rules: [{
                    required: true,
                    message: '请输入密码!'
                }],
            })(
                <Input prefix={<Icon type="lock" style={{
                    fontSize: 13
                }}/>} type="password" placeholder="密码"/>)
            }
            </FormItem>
            <FormItem>
              {
            getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(
                <Checkbox>记住我</Checkbox>
            )}
              <a className="login-form-forgot" href="" style={{
                float: 'right'
            }}>忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{
                width: '100%'
            }}> 登录 </Button>
                或 <a href="">现在就去注册!</a>
              <p>
                <Icon type="github" onClick={this.gitHub}/>(第三方登录)
              </p>
            </FormItem>
          </Form>
        </div>
      </div>
        );
    }
}

const Login = Form.create()(LoginComponent);

function mapStateToProps(state) {
    return {
        state
    };
}
;

export default connect(mapStateToProps)(Login);
