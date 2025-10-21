"use client";

import { NextThemesProvider, NextThemesProviderProps } from "@lib/next-themes";
import { RadixTheme, RadixThemeProps } from "@lib/radix";
import { useMounted } from "@hooks/useMounted";


export type UiCoolThemeProviderProps = NextThemesProviderProps & {
    children: React.ReactNode;
    radixThemeProps?: Omit<RadixThemeProps, "children">;
};

export function ThemeProvider({
    children,
    radixThemeProps,
    ...nextThemeProps
}: UiCoolThemeProviderProps) {
    const mounted = useMounted();

    if (!mounted) return <RadixTheme {...radixThemeProps}>{children}</RadixTheme>;
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            {...nextThemeProps}
        >
            <RadixTheme {...radixThemeProps}>
                {children}
            </RadixTheme>
        </NextThemesProvider>
    );
}