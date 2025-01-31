import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className = "", children, ...props }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-3 
                  border border-transparent text-[18px] font-medium rounded-md 
                  text-white gradient-bg hover:opacity-90 hover:scale-105 
                  active:scale-95 transition-all duration-200 ${className}`}
      {...props}>
      {children}
    </button>
  );
};
