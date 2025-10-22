import { ReactNode } from "react";
import { cn, ClassName } from "@utils/cn";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@radix-ui/themes";
import { DynamicIcon } from "lucide-react/dynamic";

export const SiteContainer = ({
    children,
    className,
}: { children?: ReactNode; className?: ClassName }) => (
    <div className={cn("w-full container mx-auto px-12", className)}>
        {children}
    </div>
);

export const SiteRoot = ({
    children,
    className,
}: { children?: ReactNode; className?: ClassName }) => (
    <div className={cn("min-h-screen flex bg-background text-foreground", className)}>
        {children}
    </div>
);

export const SiteSidebar = ({
    children,
    className,
}: { children?: ReactNode; className?: ClassName }) => (
    <aside
        className={cn(
            "flex w-64 bg-muted text-muted-foreground border-r border-border flex-col",
            className
        )}
    >
        {children}
    </aside>
);

export const SiteWrapper = ({
    children,
    className,
}: { children?: ReactNode; className?: ClassName }) => (
    <div className={cn("flex-1 flex flex-col min-h-screen", className)} style={{ flexDirection: 'column' }}>{children}</div>
);

export const SiteHeader = ({
    children,
    className,
    containerClassName,

    wordmark,
    logo
}: {
    children?: ReactNode;
    className?: ClassName;
    containerClassName?: ClassName;

    wordmark?: string
    logo?: ReactNode
}) => (
    <header className={cn("sticky top-0 z-30 border-b bg-background/80 backdrop-blur", className)}>
        <SiteContainer className={cn("flex h-16 items-center justify-between gap-4", containerClassName)}>
            <div>
                <Button
                    variant="outline"
                    size="2"
                    className={cn("fixed bottom-4 right-4", className)}
                    disabled
                    aria-label="Toggle theme (loading)"
                >
                    <DynamicIcon name="menu" size={18} />
                </Button>
            </div>

            <div>
                {logo}
                {wordmark && <span className="font-bold text-xl">uicool</span>}
            </div>

            <div className="flex-1">
                {children}
            </div>

            <div>
                <ThemeToggle />
            </div>
        </SiteContainer>
    </header>
);

export const SiteMain = ({
    children,
    className,
}: { children?: ReactNode; className?: ClassName }) => (
    <main className={cn("flex-1 py-6", className)}>{children}</main>
);

export const SiteFooter = ({
    children,
    className,
    containerClassName,
}: {
    children?: ReactNode;
    className?: ClassName;
    containerClassName?: ClassName;
}) => (
    <footer className={cn("border-t bg-muted/30 py-4", className)}>
        <SiteContainer className={cn("py-4", containerClassName)}>{children}</SiteContainer>
    </footer>
);
