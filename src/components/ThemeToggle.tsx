"use client";

import { DynamicIcon } from "@lib/lucide-react"; // Import icons
import { Button } from "@lib/radix";

import { useMounted } from "@hooks/useMounted";
import { cn } from "@utils/cn";
import { PropifyPrimitive } from "@utils/cva";
import { useTheme } from "next-themes";

export type ThemeToggleProps = PropifyPrimitive<"button">;

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
    const { setTheme, resolvedTheme } = useTheme();
    const mounted = useMounted();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        // Render a placeholder or null to avoid hydration mismatch
        // and layout shift. A simple button skeleton is good.
        return (
            <Button
                variant="outline"
                size="2"
                className={cn("fixed bottom-4 right-4", className)}
                disabled
                {...props}
                aria-label="Toggle theme (loading)"
                color="yellow"
            >
                <DynamicIcon name="sun" size={18} />
            </Button>
        );
    }

    const isDarkMode = resolvedTheme === "dark";

    return (
        <Button
            variant="outline"
            size="2" // Radix theme scale for a typical icon button
            {...props} // Spread remaining props
            color="yellow"
            className={cn("fixed bottom-4 right-4", className)} // Merge classes
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            <DynamicIcon name={isDarkMode ? 'sun' : "moon"} size={18} />
        </Button>
    );
}