"use client"
import React, { useEffect, useState } from 'react';
import SideBar from '@/app/layout/SideBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Home() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        setTheme(createTheme());
    }, []); //

    if (!theme) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <SideBar />
        </ThemeProvider>
    );
}
