import React, { useState, useEffect, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Models, SystemAPIModels } from "../../models";
import ManagerSignup from "./ManagerSignup";
import { Button, Modal } from "antd";


import "./styles.css";
import { Redirect } from "react-router-dom";
import { newUserSignData } from "../../actions";

const SignUpPage = () => {
    const actionDispatch = useDispatch<Dispatch<any>>();
    const newUserObject: any = useSelector<SystemAPIModels.RootState>(state => state.newUser)

    const [signupData, setSignupData] = useState<SystemAPIModels.Signup>({
        email: "",
        fullName: "",
        dateOfBirth: "",
        phoneNumber: "",
        gender: "",
        joiningDate: "",
        password: "",
        patientid: "",
        testid: "",
        successState: ""
    })
    const [doneSignup, setDoneSignup] = useState<boolean>(false);
    useEffect(() => {
        console.log("Sign Up", newUserObject)
    }, [newUserObject])

    const onChangeEventMngr = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        setSignupData({ ...signupData, [fieldName]: value })
        console.log(fieldName, value)
    }
    const onChangeGenderEvent = (value: string) => {
        setSignupData({ ...signupData, ["gender"]: value })
    }
    const onSubmitMngr = () => {
        console.log("before submit", signupData);
        actionDispatch(newUserSignData(signupData))
        setDoneSignup(true);
    }
    if (doneSignup) {
        return (
            <Redirect to="/login" />
        )
    }

    return (
        <div className="signup-container">
            <ManagerSignup
                newuserData={signupData}
                onSubmitMngr={onSubmitMngr}
                onChangeEventMngr={onChangeEventMngr}
                onChangeGenderEvent={onChangeGenderEvent} />
        </div>
    )
}

export default SignUpPage;