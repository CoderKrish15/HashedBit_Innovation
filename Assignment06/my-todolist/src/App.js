import React from 'react';
import ToDoApp from './ToDoApp'; // Make sure the filename matches exactly

function App() {
  const styles = {
    appContainer: {
      backgroundColor: '#f4f7f6',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }
  };

  return (
    <div style={styles.appContainer}>
      <ToDoApp />
    </div>
  );
}

export default App;