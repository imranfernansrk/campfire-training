import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ManagerLogin from "./MemberLogin";

import "./styles.css"

export const Login = () => {

    const [loggedManager, setLoggedManager] = useState(false);

    useEffect(() => {
        console.log("login useEffect",sessionStorage.getItem('userLog'));
        if(sessionStorage.hasOwnProperty('userLog')) {
            setLoggedManager(true);
            // if(sessionStorage.getItem('userLog') != null) {
            //     console.log("session triggers")
            // }
        }else{
            setLoggedManager(false);
        }
    }, [])

    if (loggedManager) {
        return (
            <Redirect to="/profile" />
        )
    }

    return (
        <div className="login-container">
            <div className="login-page-menu">
                <div className="login-tab-pane">
                    <ManagerLogin />
                </div>
            </div>
        </div>
    )
}