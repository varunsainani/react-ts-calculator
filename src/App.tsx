import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Display from './components/Display';
import Button from './components/Button';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        const result = evaluate(input);
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <h2>React TS Calculator</h2>
      <Display value={input} onChange={setInput} />
      <div className="buttons">
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'].map((char) => (
          <Button key={char} label={char} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
