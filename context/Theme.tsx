"use client";

import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemeProveder } from "next-themes";

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
   return <NextThemeProveder {...props}>{children}</NextThemeProveder>;
}
