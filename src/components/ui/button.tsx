// Button.tsx
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...rest }) => {
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
