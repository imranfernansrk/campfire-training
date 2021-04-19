import React from "react";
import SignupForm from "./SignupForm";
import { Models, SystemAPIModels } from "../../models";
import { SignupString } from "../../constants";

import "./styles.css";

interface Props {
    newuserData: SystemAPIModels.Signup
    onSubmitMngr: any,
    onChangeEventMngr: any,
    onChangeGenderEvent: any
}

const ManagerSignup = ({ newuserData, onSubmitMngr, onChangeEventMngr, onChangeGenderEvent }: Props) => {
    return (
        <SignupForm
        onSubmitEvent={onSubmitMngr}
        onChangeEvent={onChangeEventMngr}
        onChangeGenderEvent={onChangeGenderEvent}
        newUserData={newuserData}
        labelId={SignupString.MANAGER_ID}
        placeholderId={SignupString.ENTER_MANAGER_ID}
        labelName={SignupString.MANAGER_NAME}
        placeholderName={SignupString.ENTER_MANAGER_NAME}
        formName={SignupString.MANAGER_FORM_NAME}
        labelTeamId={SignupString.TEAM_ID}
        palceholderTeamId={SignupString.ENTER_TEAM_ID} />
    )
}

export default ManagerSignup;