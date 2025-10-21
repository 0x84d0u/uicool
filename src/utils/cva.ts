import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';
import { JSX } from "react/jsx-runtime";

export { cva, } from 'class-variance-authority'
export type PropifyPrimitive<T extends keyof JSX.IntrinsicElements> = React.ComponentPropsWithoutRef<T> & {
    className?: ClassValue
}

export type PropifyPrimitiveWithVariants<
    T extends keyof JSX.IntrinsicElements,
    V extends (...args: any[]) => string
> = PropifyPrimitive<T> & VariantProps<V>;

