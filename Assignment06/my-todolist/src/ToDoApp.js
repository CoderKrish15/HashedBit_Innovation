import React, { useState } from 'react';

const ToDoApp = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return; 


    const newList = [...todoList, task].sort((a, b) => 
      a.toLowerCase().localeCompare(b.toLowerCase())
    );

    setTodoList(newList);
    setTask(''); 
  };

  const removeTask = (indexToRemove) => {
    const newList = todoList.filter((_, index) => index !== indexToRemove);
    setTodoList(newList);
  };

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: '500px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    },
    header: { color: '#2c3e50', textAlign: 'center' },
    inputArea: { display: 'flex', gap: '10px', marginBottom: '20px' },
    input: {
      flex: 1,
      padding: '12px',
      borderRadius: '8px',
      border: '2px solid #e0e0e0',
      outline: 'none',
      fontSize: '16px'
    },
    addBtn: {
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600'
    },
    list: { listStyle: 'none', padding: 0 },
    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 15px',
      borderBottom: '1px solid #f0f0f0',
      transition: 'background 0.2s'
    },
    deleteBtn: {
      padding: '6px 12px',
      backgroundColor: '#ff7675',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '12px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>React - To Do App</h2>

      <div style={styles.inputArea}>
        <input 
          type="text" 
          placeholder="Enter a new task..." 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>Add Task</button>
      </div>

      <ul style={styles.list}>
        {todoList.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <span>{item}</span>
            <button 
              onClick={() => removeTask(index)} 
              style={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {todoList.length === 0 && (
        <p style={{textAlign: 'center', color: '#bdc3c7'}}>No tasks yet. Add one above!</p>
      )}
    </div>
  );
};

export default ToDoApp;