import React from 'react';

interface DisplayProps {
  value: string;
  onChange: (value: string) => void;
}

const Display: React.FC<DisplayProps> = ({ value, onChange }) => {
  return (
    <input
      className="display"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="0"
    />
  );
};

export default Display;
