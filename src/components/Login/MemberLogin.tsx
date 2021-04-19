import React, { useState, Dispatch, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { postUserLoginData } from "../../actions";
import { SystemAPIModels } from "../../models";
import { LoginString } from "../../constants";
import LoginForm from "./LoginForm";

import { notification } from "antd";
import './styles.css'

const ManagerLogin = () => {
    const userObj: any = useSelector<SystemAPIModels.RootState>(state => state.datas)
    console.log("store ----- ", userObj);
    const actionDispatch = useDispatch<Dispatch<any>>();


    const [loginData, setLoginData] = useState<SystemAPIModels.Login>({
        email: '',
        password: ''
    })
    const [validUserObject, setValidUserObject] = useState<SystemAPIModels.RootState>();

    const [validLogin, setValidLogin] = useState<boolean>(false)

    useEffect(() => {
        console.log("useEffect Managerlog", userObj);
        console.log("after set state in useEffect", validUserObject);
        if (userObj.hasOwnProperty("data")) {
            console.log("success useEffect")
            onSuccessUserLogin();
        } else if (userObj.hasOwnProperty("error") && userObj.error != '200') {
            console.log('user login failed');
            onFailedUserLogin();
        }
    }, [userObj])

    const onSuccessUserLogin = () => {
        setValidUserObject(userObj)
        sessionStorage.setItem("userLog", JSON.stringify(userObj));
        setValidLogin(true);
        setLoginData({ email: '', password: '' });
        successNotification(LoginString.AUTHENTICATION_SUCCESS);
        console.log("success user")
    }
    const onFailedUserLogin = () => {
        sessionStorage.removeItem('userLog');
        errorNotification('Incorrect email or password');
    }
    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        setLoginData({ ...loginData, [fieldName]: value })
    }
    const onSubmitEvent = async () => {
        console.log("Input data", loginData)
        actionDispatch(postUserLoginData(loginData));
    }
    const successNotification = (message: string) => {
        notification.config({
            placement: 'topLeft'
        });
        notification['success']({
            message: message,
        });
    }
    const errorNotification = (message: string) => {
        notification.config({
            placement: 'topLeft'
        });
        notification['error']({
            message: message,
        });
    }
    if (validLogin) {
        return (
            <Redirect to="/profile" />
        )
    }
    return (
        <div className="MANAGER_LOGIN_PROFILE">
            <div className="login-form-container">
                <LoginForm
                    placeholderId={LoginString.ENTER_EMAIL}
                    placeholderPassword={LoginString.ENTER_PASSWORD}
                    loginData={loginData}
                    onChangeEvent={onChangeEvent}
                    onSubmitEvent={onSubmitEvent} />
            </div>
        </div>
    )

}

export default ManagerLogin;