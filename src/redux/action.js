import {REGISTER} from "./types";

export function createUser(id, username, email, password, phone){
    return{
        type : REGISTER,
        data:{id, username, email, password, phone}
    }
}