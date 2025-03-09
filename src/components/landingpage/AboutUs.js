import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
      <h1 style={{ color: 'black' }}>About Us</h1>
      </header>
      <section style={styles.content}>
        <p style={styles.text}>
          Akni Environmental Management Service (Pty) Ltd is a South African Environmental Consulting firm headquartered in Pretoria.This consulting firm was established in 2024 bt Ms.delani Mathebula
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Align items from top
    alignItems: 'center',
    height: '50vh', // Full viewport height
    backgroundColor: 'white', // Light background color
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center', // Center-align text
  },
  header: {
    width: '100%', /* Ensure header takes full width */
    // backgroundColor: '#89298d',
    color: 'white', /* Light background for the header */
    padding: '20px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', /* Optional: add subtle shadow */
  },
  
  heading: {
    fontSize: '44px',
    fontWeight: 'bold',
    margin: '0', // Remove margin for more compact heading
    color: '#333', // Dark text color
  },
  content: {
    maxWidth: '900px', // Max width for text content
    marginTop: '40px', // Space between header and content
    padding: '10px', // Optional: add padding for extra space around the text
  },
  text: {
    fontSize: '19px', /* Slightly larger font size */
    lineHeight: '1.8', /* Increased line height for better readability */
    color: '#555', /* Slightly lighter text color */
  }
};

export default AboutUs;
