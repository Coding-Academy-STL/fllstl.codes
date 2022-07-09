import React, { useEffect, useState } from 'react';

// components
import Navbar from '../components/navbar';
import Footer from './footer';

// styles
import cx from 'classnames';
import Head from 'next/head';

export default function Layout({ children, active } : { children: React.ReactNode, active: string }) {
    const [isDarkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        window.localStorage.setItem('isDarkMode', `${isDarkMode}`);
    }

    useEffect(() => {
        if ((window.localStorage.getItem('isDarkMode') === 'true') || (window.localStorage.getItem('isDarkMode') === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }, [isDarkMode]);

    return (
        <>
            <Head>
                <title>{active.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1))} | CASTL FLL</title>
            </Head>
            <div className={cx({dark: isDarkMode}, 'transition-colors')}>
                <div className={cx("bg-slate-50 dark:bg-slate-700 h-full", { dark: isDarkMode })}>
                    <Navbar active={active} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    <main className={cx({dark: isDarkMode})}>{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    );
}