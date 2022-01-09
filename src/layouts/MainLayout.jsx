import React from 'react';
import {Header} from "../components/Header/Header";
import {Search} from "../components/Search/Search";
import {Footer} from "../components/Footer/Footer";


export const MainLayout = ({children}) => (
    <>
        <Header/>
        <Search/>
        {children}
        <Footer/>
    </>
);
