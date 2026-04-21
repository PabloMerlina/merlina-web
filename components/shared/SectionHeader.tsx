import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
