import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid Input");
      return;
    }

    let res;
    switch (operation) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n2 !== 0 ? n1 / n2 : "Error: Div by 0"; break;
      default: res = 0;
    }
    setResult(res);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: "'Segoe UI', Roboto, sans-serif"
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      textAlign: 'center',
      width: '350px'
    },
    title: {
      color: '#333',
      marginBottom: '25px',
      fontSize: '24px',
      fontWeight: '600'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginBottom: '25px'
    },
    input: {
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    buttonGroup: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '10px',
      marginBottom: '25px'
    },
    btn: (color) => ({
      padding: '15px 0',
      borderRadius: '10px',
      border: 'none',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      backgroundColor: color,
      transition: 'transform 0.1s, opacity 0.2s',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }),
    resultDiv: {
      marginTop: '10px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      border: '1px solid #eee'
    },
    resultText: {
      margin: 0,
      fontSize: '14px',
      color: '#666',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    resultValue: {
      margin: '5px 0 0 0',
      fontSize: '28px',
      color: '#222',
      fontWeight: '700'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Simple Calculator</h2>
        
        <div style={styles.inputGroup}>
          <input 
            type="number" 
            placeholder="First Number" 
            value={num1} 
            onChange={(e) => setNum1(e.target.value)} 
            style={styles.input}
          />
          <input 
            type="number" 
            placeholder="Second Number" 
            value={num2} 
            onChange={(e) => setNum2(e.target.value)} 
            style={styles.input}
          />
        </div>

        <div style={styles.buttonGroup}>
          <button style={styles.btn('#3b82f6')} onClick={() => handleCalculation('+')}>+</button>
          <button style={styles.btn('#ef4444')} onClick={() => handleCalculation('-')}>-</button>
          <button style={styles.btn('#10b981')} onClick={() => handleCalculation('*')}>×</button>
          <button style={styles.btn('#8b5cf6')} onClick={() => handleCalculation('/')}>÷</button>
        </div>

        <div style={styles.resultDiv}>
          <p style={styles.resultText}>Result</p>
          <h1 style={styles.resultValue}>{result !== null ? result : '--'}</h1>
        </div>
      </div>
    </div>
  );
};

export default Calculator;