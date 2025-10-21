"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "@lib/next-themes";
import type { ThemeProviderProps as NextThemesProviderProps } from "@lib/next-themes";
import { Theme as RadixTheme } from "@lib/radix-ui-themes";
import type { ThemeProps as RadixThemeProps } from "@lib/radix-ui-themes";

// Combine props from both providers
export type UiCoolThemeProviderProps = NextThemesProviderProps & {
    children: React.ReactNode;
    // Explicitly add Radix Theme props you want to expose
    radixThemeProps?: Omit<RadixThemeProps, "children">;
};

export function ThemeProvider({
    children,
    radixThemeProps,
    ...nextThemeProps
}: UiCoolThemeProviderProps) {
    const [mounted, setMounted] = useState(false);

    // Fix hydration issue
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Render RadixTheme even on SSR to prevent FOUC (Flash of Unstyled Content)
        // You can also just return <>{children}</> if you prefer
        return <RadixTheme {...radixThemeProps}>{children}</RadixTheme>;
    }

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            {...nextThemeProps} // Allow overriding defaults
        >
            <RadixTheme {...radixThemeProps}>
                {children}
            </RadixTheme>
        </NextThemesProvider>
    );
}