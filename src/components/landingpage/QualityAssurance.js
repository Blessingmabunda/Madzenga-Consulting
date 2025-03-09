import React from 'react';

const SustainabilityHero = () => {
  // Inline CSS styles
  const styles = {
    heroContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      gap: '40px',
      alignItems: 'center',
    },
    heroContent: {
      flex: 1,
    },
    logoContainer: {
      marginBottom: '24px',
    },
    logo: {
      height: '80px',
    },
    companyName: {
      color: '#22c55e', /* green */
      fontWeight: 500,
      marginBottom: '8px',
      textAlign: 'center',
    },
    mainHeading: {
      fontSize: '42px',
      fontWeight: 700,
      color: '#111827', /* dark gray */
      marginBottom: '16px',
      lineHeight: 1.2,
      textAlign: 'center',
    },
    coloredHeading: {
      marginBottom: '24px',
      fontSize: '42px',
      fontWeight: 700,
      lineHeight: 1.2,
      textAlign: 'center',
    },
    greenText: {
      color: '#22c55e', /* green */
    },
    orangeText: {
      color: '#fb923c', /* orange */
    },
    description: {
      color: '#4b5563', /* gray */
      marginBottom: '32px',
      maxWidth: '450px',
      lineHeight: 1.5,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    
    ctaButton: {
      backgroundColor: '#fb923c', /* orange */
      color: 'white',
      fontWeight: 700,
      padding: '12px 24px',
      borderRadius: '8px', /* reduced radius */
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    
    
    heroImageContainer: {
      flex: 1,
    },
    heroImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    // Media query is handled with conditional rendering and window width
  };

  // Media query simulation for mobile
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    styles.heroContainer.flexDirection = 'column';
    styles.mainHeading.fontSize = '36px';
    styles.coloredHeading.fontSize = '30px';
  }

  return (
    <div style={styles.heroContainer}>
      {/* Left side content */}
      <div style={styles.heroContent}>
        <div style={styles.logoContainer}>
        <img
            src={require("./../../assets/logo.png")}
            alt="Logo"
            style={{ height: "85px", width: "85px" }}
          />
        </div>
        
        <div style={styles.coloredHeading}>
          <span style={styles.greenText}> QUALITY </span>
          <br />
          <span style={styles.orangeText}>ASSURANCE</span>
        </div>
        
        <p style={styles.description}>
        We are committed to meeting the needs of our customers, staff and stakeholders to ensure that services are carried out to client satisfaction and maintain the integrity and sustainability of the environment.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
  <button 
    style={styles.ctaButton}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f97316'} 
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fb923c'}
  >
   Read More
  </button>
</div>

      </div>
      
      {/* Right side image */}
      <div style={styles.heroImageContainer}>
  <img
    src={require("./../../assets/quality.png")}
    alt="Logo"
    style={{
      height: "150px", 
      width: "400px",  // Increased size
      borderRadius: "20px"  // Rounded corners
    }}
  />
</div>

    </div>
  );
};

export default SustainabilityHero;