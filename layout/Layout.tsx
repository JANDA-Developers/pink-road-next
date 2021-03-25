import $ from 'jquery'
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Footer } from './components/Footer';
import dynamic from 'next/dynamic';
import jwt from "jsonwebtoken";
import dayjs from 'dayjs';
import { Header } from './components/Header';
const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

interface IProp { }

export const Layout: React.FC<IProp> = ({ children }) => {
    useEffect(() => {
        const interval = setInterval(checkLogoutTime, 60000);;
        return () => { clearInterval(interval); }
    }, [])
    return <div className="container">
        <Head>
            <script
                src="https://code.jquery.com/jquery-3.5.1.js"
                integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
                crossOrigin="anonymous"
            ></script>
        </Head>
        <Header />
        <div style={{ minHeight: "90vh" }}>
            {children}
        </div>
        <Footer />
        <ReactTooltip effect="solid" type="info" />
    </div>;
};


export default Layout;


export const checkLogoutTime = () => {
    if (typeof window === undefined) return;
    const _jwt = localStorage.getItem("jwt");
    if (!_jwt) return;
    const result = jwt.decode(_jwt)
    // @ts-ignore
    const expireAt: Date = new Date(result.exp * 1000)

    if (dayjs(expireAt).isBefore(new Date())) {
        // localStorage.removeItem("jwt");
        // alert("활동이 없어 로그아웃 처리 되었습니다.");
        // location.reload();
    }
}