import Head from 'next/head';
import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import ReactTooltip from "react-tooltip";
interface IProp { }

export const Layout: React.FC<IProp> = ({ children }) => {
    return <div className="container">
        {/* <Head>
            <script src="/build/ckeditor.js"></script>
        </Head> */}
        <Header />
        {children}
        <Footer />
        <ReactTooltip  id=" tooltip" />
    </div>;
};


export default Layout;
