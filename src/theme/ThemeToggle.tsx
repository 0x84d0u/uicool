"use client";

import { useTheme } from "@lib/next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "@lib/lucide-react"; // Import icons
import { Button } from "@lib/radix-ui-themes";
import { cn, PropifyPrimitive } from "@utils"; 

export type ThemeToggleProps = PropifyPrimitive<"button">;

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Fix hydration issue
    useEffect(() => {
        setMounted(true);
    }, []);

    // onClick handler to toggle theme
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
                <Sun size={18} /> {/* Or Moon, just for layout */}
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
            {isDarkMode ? (
                <Sun size={18} />
            ) : (
                <Moon size={18} />
            )}
        </Button>
    );
}