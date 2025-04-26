import React from 'react';
import logo from './assets/logo.png';

export default function Welcome() {
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <img src={logo} alt="USTP Logo" style={styles.logo} />
        <h1 style={styles.title}>USTP MARKET PLACE FOR STUDENTS</h1>
        
        <div style={styles.welcomeSection}>
          <h2 style={styles.subtitle}>Welcome User!</h2>
          <p style={styles.description}>
            Provide your necessary information and<br/>
            register as a seller.
          </p>
          
          <button style={styles.button}>Start Registration</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f3e3',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
  },
  logo: {
    width: '180px',
    marginBottom: '15px',
  },
  title: {
    color: '#2a3d8f',   // Updated title color
    fontWeight: '900',
    fontSize: '30px',
    margin: '0 0 30px 0',
    textAlign: 'center',
    letterSpacing: '0.8px',
  },
  welcomeSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  subtitle: {
    color: '#22336c',   // Updated subtitle color to match the new screenshot
    fontWeight: '900',
    fontSize: '44px',
    margin: '0 0 5px 0',
    textAlign: 'center',
  },
  description: {
    fontSize: '17px',
    color: '#22336c',   // Also update description color for consistency
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontWeight: '500',
  },
  button: {
    marginTop: '10px',
    padding: '12px 35px',
    backgroundColor: '#22336c',  // Updated button color too
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '18px',
  }
};