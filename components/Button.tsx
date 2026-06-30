import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button 
      className={`bg-gradient-to-r from-brand-blue-main to-brand-blue-grad text-white font-heading-primary px-6 py-3 rounded-lg shadow-md hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
