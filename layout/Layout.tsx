import $ from 'jquery'
import Head from 'next/head';
import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import ReactTooltip from "react-tooltip";
interface IProp { }

export const Layout: React.FC<IProp> = ({ children }) => {
    return <div className="container">
        <Head>
            <script
                src="https://code.jquery.com/jquery-3.5.1.js"
                integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
                crossorigin="anonymous"></script>
            <script src="/normal.js"></script>
        </Head>
        <Header />
        {children}
        <Footer />
        <ReactTooltip effect="solid" />
    </div>;
};


export default Layout;
