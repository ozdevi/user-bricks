"use client";

import { themes, useTheme } from "@/providers/ThemeProvider";
import { useEffect } from "react";


export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        let selectedTheme = themes[theme];
        document.body.style.backgroundColor = selectedTheme.backgroundColor;
        document.body.style.color = selectedTheme.textColor;
    }, [theme]);

    useEffect(() => {
        return () => {
            setTheme('initial');
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
        };
    }, []);

    return (
        <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
            {Object.entries(themes).map(([name, theme]) => (
                <div
                    key={name}
                    onClick={() => setTheme(name as keyof typeof themes)}
                    title={name}
                    style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: theme.backgroundColor,
                        border: "1px solid #ccc",
                        cursor: "pointer",
                        borderRadius: "4px",
                    }}
                />
            ))}
        </div>
    );
}
