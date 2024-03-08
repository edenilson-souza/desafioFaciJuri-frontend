import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface TextProps {
    children: React.ReactNode;
    element?: ElementType;
    className?: string;
}

export function Select({ children, element = "select", className }: TextProps) {
    const Component = element;
    const baseStyled =
        "w-1/3 h-10 rounded border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-0";
    return <Component className={cn(baseStyled, className)}>{children}</Component>;
}
