import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "rounded-full font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center whitespace-nowrap";

  const variants = {
    primary: "bg-violet-600 hover:bg-violet-700 text-white shadow-lg hover:shadow-xl",
    secondary: "border-2 border-violet-500 text-violet-400 hover:bg-violet-500/10",
    ghost: "text-violet-400 hover:text-violet-300 hover:bg-violet-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
