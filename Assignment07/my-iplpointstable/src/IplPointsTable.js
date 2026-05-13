import React, { useState, useEffect } from 'react';

const IplPointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching IPL data:", error);
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      padding: '20px',
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      backgroundColor: '#f0f4f8',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    title: { 
      color: '#1a237e', 
      marginBottom: '20px',
      fontSize: '32px',
      fontWeight: 'bold'
    },
    table: {
      width: '100%',
      maxWidth: '850px',
      borderCollapse: 'separate',
      borderSpacing: '0',
      backgroundColor: '#fff',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      borderRadius: '15px',
      overflow: 'hidden'
    },
    th: {
      backgroundColor: '#3f51b5',
      color: 'white',
      padding: '18px 15px',
      textAlign: 'left',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    td: {
      padding: '15px',
      borderBottom: '1px solid #eee',
      color: '#333',
      fontSize: '15px'
    }
  };

  if (loading) return <div style={styles.container}><h2>Loading...</h2></div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>IPL Season 2022 Points Table</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>No</th>
            <th style={styles.th}>Team</th>
            <th style={styles.th}>Matches</th>
            <th style={styles.th}>Won</th>
            <th style={styles.th}>Lost</th>
            <th style={styles.th}>NRR</th>
            <th style={styles.th}>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id || index}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}><strong>{team.Team}</strong></td>
              <td style={styles.td}>{team.Won + team.Lost}</td>
              <td style={styles.td}>{team.Won}</td>
              <td style={styles.td}>{team.Lost}</td>
              <td style={styles.td}>{team.NRR}</td>
              <td style={styles.td}>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IplPointsTable;