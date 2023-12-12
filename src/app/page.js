"use client"
import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TopBar from "@/app/layout/TopBar";
import RootLayout from "@/app/layout";

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
            <RootLayout/>
        </ThemeProvider>
    );
}
