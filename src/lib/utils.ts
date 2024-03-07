import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const notify = (message: string, options?: any) => toast(message, options ?? { type: "success" });
