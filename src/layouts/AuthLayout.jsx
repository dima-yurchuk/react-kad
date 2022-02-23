import React from 'react';
import Header from "../components/Header/Header";

const AuthLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default AuthLayout;