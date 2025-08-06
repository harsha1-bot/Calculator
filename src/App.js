import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  
  const [expr, setExpr] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (val) => setExpr(prev => prev + val);
  const handleClear = () => { setExpr(''); setResult(''); };
  const handleDelete = () => setExpr(prev => prev.slice(0, -1));
  const handleEvaluate = () => {
    try {
      const res = evaluate(expr);
      setResult(res.toString());
    } catch {
      setResult('Error');
    }
  };

    
  

  const buttons = [
    ['sin(', 'cos(', 'tan(', 'log(', 'ln(', '√', '(', ')', 'π', '+', '%'],
    ['7','8','9','-','^','4','5','6','*','0','3','2','1','/','C','DEL','=','.']
  ];

  return (

    
    <div className="App">
      <h1>Scientific calculator</h1>
      <div className="calculator">
      <div className="display">
        <div className="expr">{expr || '0'}</div>
        <div className="res">{result}</div>
      </div>
      <div className="btn-grid">
        {buttons.flat().map((btn) => (
          btn === 'C' ? (
            <button key={btn} onClick={handleClear} className="control">C</button>
          ) : btn === 'DEL' ? (
            <button key={btn} onClick={handleDelete} className="control">DEL</button>
          ) : btn === '=' ? (
            <button key={btn} onClick={handleEvaluate} className="equals">=</button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
          )
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;

