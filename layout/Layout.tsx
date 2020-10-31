import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

interface IProp { }

export const Layout: React.FC<IProp> = ({ children }) => {
    return <div>
        <Header />
        <div className="container">
            {children}
        </div>
        <Footer />
    </div>;
};


export default Layout;
