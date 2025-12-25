"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useBrickContext } from "./BrickProvider";

export const themes = {
    initial: {
        backgroundColor: "#2a2ab8",
        textColor: "#ffffff",
    },
    c64green: {
        backgroundColor: "#90ee90",
        textColor: "#000000",
    },
    c64greener: {
        backgroundColor: "#5B8D48",
        textColor: "#000000",
    }
}

type ThemeContextType = {
    theme: keyof typeof themes;
    setTheme: (theme: keyof typeof themes) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<keyof typeof themes>("initial");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
