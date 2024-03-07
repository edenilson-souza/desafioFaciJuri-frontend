import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface TextProps {
    children: React.ReactNode;
    element?: ElementType;
    className?: string;
}

export function Text({ children, element = "p", className }: TextProps) {
    const Component = element;
    const baseStyled = "text-2xl font-semibold tracking-tight w-full text-center text-[#0f172a]";
    return <Component className={cn(baseStyled, className)}>{children}</Component>;
}
