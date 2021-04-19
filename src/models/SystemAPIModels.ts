export interface RootState {
    datas: {},
    posts: [],
    newUser: {},
    postComments: [],
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

export namespace RootStateModels {
    export type RootStateModels = RootState 
}