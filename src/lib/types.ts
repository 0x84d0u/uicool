import type { VariantProps } from "class-variance-authority";
import type { ClassValue } from "clsx";
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";

export type { ClassValue as Classname } from "clsx";

export interface PropifyChildren {
  children?: ReactNode | undefined
}

export type PropifyPrimitive<T extends keyof JSX.IntrinsicElements> = React.ComponentPropsWithoutRef<T> & {
    className?: ClassValue
}

export type PropifyPrimitiveWithVariants<
    T extends keyof JSX.IntrinsicElements,
    V extends (...args: any[]) => string
> = PropifyPrimitive<T> & VariantProps<V>;

