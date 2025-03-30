import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className = "" }) => {
  return <p className={`text-gray-800 ${className}`}>{children}</p>;
};

export default Text;
