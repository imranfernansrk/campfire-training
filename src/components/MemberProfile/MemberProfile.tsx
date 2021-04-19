import React, { useState, useEffect, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogoutAction } from "../../actions";
import ViewAndEditProfile from "./ViewAndEditProfile";

import "./styles.css";

export const MemberProfile = () => {
    const actionDispatch = useDispatch<Dispatch<any>>();
    const [managerDetails, setManagerDetails] = useState<any>();
    const [userLogout, setUserLogout] = useState<boolean>(false);

    let userDataObject = sessionStorage.getItem('userLog');
    useEffect(() => {
        console.log("user prof useEff", userDataObject)
        if (userDataObject != null) {
            const userData = JSON.parse(userDataObject);
            setManagerDetails(userData.data);
        } else {
            setUserLogout(true);
        }
    }, [userDataObject]);

    const clearLoggedUser = () => {
        console.log("Log out");
        actionDispatch(userLogoutAction());
        sessionStorage.removeItem("userLog");
        setUserLogout(true);
    }

    const [empIds, setEmpIds] = useState<string[]>([])
    const onChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let value: string[] = Array.from(event.target.selectedOptions, option => option.value);
        setEmpIds(value);
        console.log(empIds)
    }

    const [messageBox, setMessageBox] = useState<boolean>(false)
    const onSubmitEmpIds = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault()
        setMessageBox(true)
    }
    if (userLogout) {
        return (<Redirect to="/login" />)
    }
    console.log("prof useEff", managerDetails);
    return (
        <div className="">
            <ViewAndEditProfile memberData={managerDetails} />
        </div>
    )
}

export default MemberProfile;