import React, { FC } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'; 
  onClick?: () => void; 
  disabled?: boolean; 
  children: React.ReactNode; 
  className?: string; 
}

const Button: FC<ButtonProps> = ({ 
  type = 'button', 
  onClick, 
  children, 
  className 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
