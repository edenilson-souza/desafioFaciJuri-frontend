import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ElementType } from "react";

interface TextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    element?: ElementType;
    className?: string;
}

export const Select: React.FC<TextProps> = ({ children, element = "select", className, ...rest }) => {
    // export function Select({ children, element = "select", className, ...rest }: TextProps) {
    const Component = element;
    const baseStyled =
        "w-1/3 h-10 rounded border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-0";
    return (
        <Component className={cn(baseStyled, className)} {...rest}>
            {children}
        </Component>
    );
};
