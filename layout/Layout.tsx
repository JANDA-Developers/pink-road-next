import Head from 'next/head';
import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

interface IProp { }

export const Layout: React.FC<IProp> = ({ children }) => {
    return <div className="container">
        {/* <Head>
            <script src="/build/ckeditor.js"></script>
        </Head> */}
        <Header />
        {children}
        <Footer />
    </div>;
};


export default Layout;
