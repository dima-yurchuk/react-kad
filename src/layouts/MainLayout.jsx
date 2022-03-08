import React from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";

const MainLayout = ({children}) => {
    return (
        <div>
         <Header/>
         <Menu/>
            {children}
        </div>
    );
};

export default MainLayout;