import React, {Component} from 'react';
import { InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import { NavLink } from 'react-router-dom'
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
        const company = <span className="icon-login-1 login-icon"></span>
        const iconName = <span className="icon-login-2 login-icon"></span>
        const iconPassword = <span className="icon-login-3 login-icon"></span>
        return(
            <div id="login">
                <div className="login-content">

                     <div className="login-title">您好，</div>
                     <div className="login-title-ms">欢迎登陆<span className="subject">巧寓PMS</span></div>



                    <WhiteSpace size="sm" />
                    {getFieldDecorator('companyCode', {
                        rules: [{
                            required: true,
                        }],
                    })(
                        <InputItem autoFocus placeholder="公司码" labelNumber={2}  className="login-input-item">{company}</InputItem>
                    )}

                    {getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                        }],
                    })(
                        <InputItem  placeholder="手机号码" type="phone" labelNumber={2} className="login-input-item">{iconName}</InputItem>
                    )}

                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                        }],
                    })(
                        <InputItem type="password" placeholder="登陆密码" labelNumber={2} className="login-input-item">{iconPassword}</InputItem>
                    )}

                    <WhiteSpace />

                    <WingBlank className="login-btn">
                        <Button
                            type="primary"
                            disabled={hasError(getFieldsError())}
                            onClick={this.handleSubmit}
                        >
                            登录
                        </Button>
                    </WingBlank>

                    <WingBlank className="login-btn">
                        <NavLink to="/"><span className="login-topwd">忘记密码</span></NavLink>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
export default createForm()(Login);