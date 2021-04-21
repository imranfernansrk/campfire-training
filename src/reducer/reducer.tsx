import { SystemAPIModels } from "../models";
import { ActionObject } from "../actions";
import { Types } from "../actions";

const initialSystemAPIState: SystemAPIModels.RootState = {
    datas: {},
    postsData: {
        posts: [],
        pageInfo: {}
    },
    createNewPost: {},
    newUser: {},
    postComments: []
}

export const systemAPIReducer = (state: SystemAPIModels.RootState = initialSystemAPIState, action: ActionObject): SystemAPIModels.RootState => {
    console.log('systemAPIReducer', action.payload)
    switch (action.type) {
        case Types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                datas: action.payload,
            }
        case Types.USER_LOGIN_FAILED:
            return {
                ...state,
                datas: { "error": action.payload },
            }
        case Types.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                newUser: action.payload,
            }
        case Types.USER_SIGNUP_FAILED:
            return {
                ...state,
                newUser: { "error": action.payload },
            }
        case Types.USER_LOGOUT_ACTION:
            return {
                ...state,
                datas: action.payload,
            }
        case Types.POSTS_FETCH_SUCCESS:
            let pageInfo = {
                current: action.payload.current,
                prev: action.payload.prev,
                next: action.payload.next,
                pages: action.payload.pages,
                total: action.payload.total,
            };
            let newListPosts: [] = action.payload.posts;
            if (action.payload.current == 1) {
                return {
                    ...state,
                    postsData: {
                        pageInfo: pageInfo,
                        posts: newListPosts
                    }
                }
            } else {
                return {
                    ...state,
                    postsData: {
                        pageInfo: pageInfo,
                        posts: [...state.postsData.posts, ...newListPosts]
                    }
                }
            }
        case Types.POSTS_FETCH_FAILED:
            return {
                ...state,
                postsData: {
                    pageInfo: {},
                    posts: []
                },
            }
        case Types.CREATE_POST_SUCCESS:
            return {
                ...state,
                createNewPost: action.payload,
            }
        case Types.CREATE_POST_FAILED:
            return {
                ...state,
                createNewPost: action.payload,
            }
        case Types.CLEAR_CREATE_POST_OBJECT:
            return {
                ...state,
                createNewPost: action.payload,
            }
        case Types.COMMENTS_FETCH_SUCCESS:
            return {
                ...state,
                postComments: action.payload,
            }
        case Types.COMMENTS_FETCH_FAILED:
            return {
                ...state,
                postComments: [],
            }
        default: return state;
    }
}