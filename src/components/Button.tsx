import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (value: string) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
