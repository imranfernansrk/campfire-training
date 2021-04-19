import { Dispatch } from "react";
import axios from "axios";
import { Types } from "./actionTypes";
import { Models, SystemAPIModels } from "../models";
import { API } from "../constants";

export interface ActionObject {
    type: string,
    payload: any | undefined
}
export const userLoginSuccess = (data: any): ActionObject => {
    return {
        type: Types.USER_LOGIN_SUCCESS,
        payload: data
    }
}
export const userLoginFailed = (error: any): ActionObject => {
    return {
        type: Types.USER_LOGIN_FAILED,
        payload: error
    }
}
export const newUserSignupSuccess = (data: any): ActionObject => {
    return {
        type: Types.USER_SIGNUP_SUCCESS,
        payload: data
    }
}
export const newUserSignupFailed = (error: any): ActionObject => {
    return {
        type: Types.USER_SIGNUP_FAILED,
        payload: error
    }
}
export const userLogoutAction = () => {
    return {
        type: Types.USER_LOGOUT_ACTION,
        payload: {}
    }
}
export const postsFetchSuccess = (data: any): ActionObject => {
    return {
        type: Types.POSTS_FETCH_SUCCESS,
        payload: data
    }
}
export const postsFetchFailed = (error: any): ActionObject => {
    return {
        type: Types.POSTS_FETCH_FAILED,
        payload: error
    }
}
export const commentsFetchSuccess = (data: any): ActionObject => {
    return {
        type: Types.COMMENTS_FETCH_SUCCESS,
        payload: data
    }
}
export const commentsFetchFailed = (error: any): ActionObject => {
    return {
        type: Types.COMMENTS_FETCH_FAILED,
        payload: error
    }
}

export const postUserLoginData = (loginData: Models.Login) => {
    return async (dispatch: Dispatch<ActionObject>) => {
        await axios.post(API.SIGN_IN, loginData, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log("actions res", res);
                console.log("actions res", res);
                // dispatch(userLoginSuccess(res.data));
            })
            .catch(err => {
                console.log("actions res", err.toJSON())
                console.log("actions error", err.response)
                // dispatch(userLoginFailed(err.response));
            })
    }
}
export const newUserSignData = (userData: SystemAPIModels.Signup) => {
    return async (dispatch: Dispatch<ActionObject>) => {
        await axios.post(API.SIGN_UP, userData, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log("actions res", res);
                console.log("actions res", res);
                // dispatch(newUserSignupSuccess(res.data));
            })
            .catch(err => {
                console.log("actions res", err.toJSON())
                console.log("actions error", err.response)
                // dispatch(newUserSignupFailed(err.response));
            })
    }
}
export const fetchPostDatas = () => {
    return async (dispatch: Dispatch<ActionObject>) => {
        await axios.get(API.POSTS, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log("posts res", res);
                console.log("posts res data", res.data);
                // dispatch(postsFetchSuccess(res.data));
            })
            .catch(err => {
                console.log("post eror", err)
                // dispatch(postsFetchFailed(err.response));
            })
    }
}
export const fetchPostCommentsDatas = (postId: number) => {
    return async (dispatch: Dispatch<ActionObject>) => {
        await axios.get(API.SINGLE_POST_COMMENTS + `${postId}`, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log("posts res", res);
                console.log("posts res data", res.data);
                // dispatch(postsFetchSuccess(res.data));
            })
            .catch(err => {
                console.log("post eror", err)
                // dispatch(postsFetchFailed(err.response));
            })
    }
}
export const addPostData = (data: any) => {
    return async (dispatch: Dispatch<ActionObject>) => {
        await axios.post(API.POSTS, data, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log("add posts res", res);
                console.log("add posts res data", res.data);
                // dispatch(postsFetchSuccess(res.data));
            })
            .catch(err => {
                console.log("add post eror", err)
                // dispatch(postsFetchFailed(err.response));
            })
    }
}
