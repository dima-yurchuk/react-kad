export const validateUsername = (username) => {
    console.log(username)
    return String(username)
        .match(
            /[A-Z][a-z]+[A-Z][a-z]+/
        );
};
export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
export const validatePhoneNumber = (phoneNumber) => {
    return String(phoneNumber)
        .match(
            /^(\d){9}$/
        );
};