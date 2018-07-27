import React, {Component} from 'react';
import { InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.router.push('/app/list');
    }

    render() {
        const { getFieldDecorator, getFieldsError } = this.props.form;
        const hasError = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);
        const iconName = <span className="icon-login-1 login-icon"></span>
        const iconPassword = <span className="icon-login-3 login-icon"></span>
        return(
            <div id="login">
                <div className="login-content">
                     <div className="login-title">您好，</div>
                     <div className="login-title-ms">欢迎登陆<span className="subject">巧寓pms</span></div>

                    <WhiteSpace size="xs" />
                    {getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                        }],
                    })(
                        <InputItem autoFocus placeholder="请输入用户名" labelNumber="60">{iconName}</InputItem>
                    )}

                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                        }],
                    })(
                        <InputItem type="password" placeholder="请输入密码" labelNumber="60">{iconPassword}</InputItem>
                    )}

                    <WhiteSpace />

                    <WingBlank>
                        <Button
                            type="primary"
                            disabled={hasError(getFieldsError())}
                            onClick={this.handleSubmit}
                        >
                            登录
                        </Button>
                    </WingBlank>
                </div>
            </div>
        )
    }
}


export default createForm()(Login);