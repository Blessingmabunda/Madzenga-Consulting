import React, { useEffect } from 'react';

const SustainabilityHero = () => {
  // Inline CSS styles
  const styles = {
    heroContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100vh', // Set full screen height
      margin: '0 auto',
      padding: '40px', // Increased padding for a more spacious feel
      gap: '60px', // Increased gap between content elements
      alignItems: 'center',
      justifyContent: 'center', // Center content vertically and horizontally
      backgroundImage: "url(" + require("./../../assets/global.jpg") + ")",
      backgroundSize: 'cover', // Make the background cover the whole screen
      backgroundPosition: 'center',
      position: 'relative',
      borderRadius: '8px', // Add rounded corners for a professional look
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', // Optional shadow for a sleek look
      overflow: 'hidden', // Prevent scrolling
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black overlay with transparency
      borderRadius: '8px', // To match the container's rounded corners
      zIndex: 1,
    },
    heroContent: {
      flex: 1,
      zIndex: 2, // Ensure content is on top of the background overlay
      position: 'relative',
      color: 'white', // Text color should contrast the background image
      textAlign: 'center',
      padding: '0 40px', // Increased padding for mobile responsiveness
    },
    logoContainer: {
      marginBottom: '40px', // Increased margin for more spacing
    },
    logo: {
      height: '100px', // Increased logo size
    },
    companyName: {
      color: '#22c55e', /* green */
      fontWeight: 700, // Bolded for more impact
      marginBottom: '16px',
    },
    mainHeading: {
      fontSize: '60px', // Increased font size for bigger heading
      fontWeight: 700,
      color: '#111827', /* dark gray */
      marginBottom: '24px', // Increased margin for spacing
      lineHeight: 1.2,
    },
    coloredHeading: {
      marginBottom: '40px', // Increased margin
      fontSize: '50px', // Larger font size for emphasis
      fontWeight: 700,
      lineHeight: 1.2,
    },
    greenText: {
      color: '#22c55e', /* green */
    },
    orangeText: {
      color: '#fb923c', /* orange */
    },
    description: {
      color: 'white', /* gray */
      marginBottom: '48px', // Increased margin for more spacing
      maxWidth: '550px', // Increased max width
      lineHeight: 1.8, // Increased line height for better readability
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
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
    ctaButtonBounce: {
      animation: 'bounce 1s infinite',
      backgroundColor: '#fb923c', /* orange */
      color: 'white',
      fontWeight: 700,
      padding: '16px 32px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px',
      transition: 'background-color 0.3s',
    },
    '@keyframes bounce': {
      '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0)',
      },
      '40%': {
        transform: 'translateY(-10px)',
      },
      '60%': {
        transform: 'translateY(-5px)',
      },
    },
    ctaButtonHover: {
      backgroundColor: '#f97316', /* dark orange */
    },
  };

  // Media query simulation for mobile
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    styles.heroContainer.flexDirection = 'column';
    styles.mainHeading.fontSize = '48px'; // Smaller font size for mobile
    styles.coloredHeading.fontSize = '36px'; // Smaller font size for mobile
    styles.description.maxWidth = '100%'; // Full width on mobile for readability
    styles.description.fontSize = '18px'; // Increased font size for mobile
  }

  // Prevent scrolling on the page by modifying the body overflow
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Cleanup when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div style={styles.heroContainer}>
      {/* Background overlay */}
      <div style={styles.overlay}></div>

      {/* Left side content */}
      <div style={styles.heroContent}>
        <div style={styles.logoContainer}>
          {/* <img
            src={require("./../../assets/logo.png")}
            alt="Logo"
            style={{ height: "85px", width: "85px" }}
          /> */}
        </div>

        <div style={styles.coloredHeading}>
          <span style={styles.greenText}> QUALITY </span>
          <br />
          <span style={styles.orangeText}>ASSURANCE</span>
        </div>

        <p style={styles.description}>
          We are committed to meeting the needs of our customers, staff, and stakeholders to ensure that services are carried out to client satisfaction and maintain the integrity and sustainability of the environment.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <button style={styles.ctaButtonBounce} onMouseOver={(e) => e.target.style.backgroundColor = styles.ctaButtonHover.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = styles.ctaButtonBounce.backgroundColor}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityHero;
