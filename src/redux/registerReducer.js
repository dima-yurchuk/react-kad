import {REGISTER} from "./types";

const initialState = {
    users:[

    ]
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type){
        case REGISTER:
            console.log(action)
            console.log(state)
            return {
                ...state,
                users: [...state.users, action.data]
            }
        default:
            return state
    }
}