import { useEffect } from "react";

function useDarkMode() {
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add("dark");
    }, []);
}

function useLightMode() {
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("dark");
    }, []);
}