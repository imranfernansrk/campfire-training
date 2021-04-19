import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { LoginTitle } from "../../constants";
import { Models } from "../../models";

import { Form, Input, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import './styles.css'

interface Props {
    loginData: Models.Login
    placeholderId: string,
    placeholderPassword: string,
    onSubmitEvent: any,
    onChangeEvent: any,
}

const LoginForm = ({ loginData, placeholderId,
    placeholderPassword, onSubmitEvent,
    onChangeEvent }: Props) => {

    return (
        <Form
            name="normal_login"
            className="login-form"
            onFinish={() => onSubmitEvent()}>
            <Form.Item>
                <Input prefix={<MailOutlined />} onChange={(e) => onChangeEvent(e)}
                    name="email"
                    value={loginData.email}
                    placeholder={placeholderId} />
            </Form.Item>
            <Form.Item>
                <Input.Password
                    prefix={<LockOutlined />}
                    value={loginData.password}
                    name="password"
                    onChange={(e) => onChangeEvent(e)}
                    placeholder={placeholderPassword} />
            </Form.Item>
            <Form.Item
                className="login-form-external-link">
                <a className="login-form-forgot" href="">
                    {LoginTitle.FORGOT_PASSWORD}
                </a>
            </Form.Item>
            <div
                className="login-form-buttons">
                <Button type="primary"
                    size="large"
                    htmlType="submit"
                    className="form-login-button">
                    {LoginTitle.LOG_IN}
                </Button>
            </div>
            <Form.Item
                className="login-form-external-link">
                <Link to="signup"
                    className="login-form-forgot">
                    {LoginTitle.REGISTER}
                </Link>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;