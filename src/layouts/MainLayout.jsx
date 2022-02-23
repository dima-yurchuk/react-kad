import React from 'react';
import Header from "../components/Header/Header";

const MainLayout = ({children}) => {
    return (
        <div>
         <Header/>
        {/*    меню   */}
            {children}
        </div>
    );
};

export default MainLayout;