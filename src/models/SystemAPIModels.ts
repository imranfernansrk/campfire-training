export interface RootState {
    datas: {},
    postsData: {
        posts: [],
        pageInfo: {
        }
    },
    createNewPost: {},
    newUser: {},
    postComments: [],
}
export interface PostsDataObject {
    posts: [],
    pageInfo: {}
}

export interface Login {
    email: string,
    password: string
}
export interface Signup {
        email: string,
        fullName?: string,
        dateOfBirth: string,
        phoneNumber: string,
        gender: string,
        joiningDate?: string,
        password: string,
        patientid?: string,
        testid?: string,
        successState?: string,
        profileImage?: string
}
export interface CreateNewPost {
    postText: string,
    postImages: string[],
    postAudienceType: number,
    postAudienceData: string[],
    postVideos: string[],
    postFiles: string[],
    postThumbs: string[],
}

export namespace RootStateModels {
    export type RootStateModels = RootState 
}