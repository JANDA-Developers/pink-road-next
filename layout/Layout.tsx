import Head from 'next/head';
import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import ReactTooltip from "react-tooltip";
interface IProp { }

export const Layout: React.FC<IProp> = ({ children }) => {
    return <div className="container">
        <Head>
            <script src="/normal.js"></script>
        </Head>
        <Header />
        {children}
        <Footer />
        <ReactTooltip effect="solid" type="info" />
    </div>;
};


export default Layout;
