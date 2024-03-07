import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface TextProps {
    children: React.ReactNode;
    element?: ElementType;
    className?: string;
}

export function Card({ children, element = "section", className }: TextProps) {
    const Component = element;
    const baseStyled = "max-w-[1440px] mx-auto px-5";
    return <Component className={cn(baseStyled, className)}>{children}</Component>;
}
