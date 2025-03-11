import React, { useEffect, useState } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const contactInfo = document.querySelector('.contact-info');
    const formSection = document.querySelector('.form-section');

    setTimeout(() => {
      contactInfo.classList.add('fade-in');
      formSection.classList.add('zoom-in');
    }, 100);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically connect to a backend service
    // For now, we'll open the email client with the form data
    const subject = `Contact Form Submission from ${formData.fullName}`;
    const body = `Name: ${formData.fullName}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:delimathevula@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We would love to hear from you! Whether you have questions about our services, need expert environmental consulting, or want to discuss a potential project, feel free to reach out. Our team is ready to assist you with sustainable solutions tailored to your needs.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.134 2 5 5.134 5 9c0 4.418 4.268 9.37 6.197 11.318a1 1 0 001.606 0C14.732 18.37 19 13.418 19 9c0-3.866-3.134-7-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </div>
              <div className="info-text">
                <p>Location: <span className="location-text">123 Main Street, City, Country</span></p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="info-text">
                <p>Email: <a href="mailto:delimathevula@gmail.com" className="email-link">delimathevula@gmail.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="info-text">
                <p>Phone: <a href="tel:+27836731454" className="phone-link">083 673 1454</a></p>
              </div>
            </div>
          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="submit-container">
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          width: 100%;
          padding: 0;
          overflow: hidden;
          background-color: #000;
          color: #fff;
        }

        .contact-header {
          padding: 40px 20px;
          text-align: left;
          max-width: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #000;
        }

        .contact-header h1 {
          font-size: 4rem;
          font-weight: bold;
          margin: 0 0 10px 0;
          text-align: center;
          color: orange ;
        }

        .contact-header p {
          font-size: 1.1rem;
          max-width: 800px;
          margin: 0;
          text-align: center;
          color: #ccc;
        }

        .contact-content {
          display: flex;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .contact-info {
          flex: 1;
          opacity: 0;
          animation: fadeInText 1.5s forwards;
          color: #fff;
        }

        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: green;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
          border: 1px solid #333;
        }

        .icon {
          width: 30px;
          height: 30px;
          color: white;
        }

        .info-text {
          flex: 1;
        }

        .info-text p {
          margin: 0;
          font-size: 1.1rem;
          color: #ccc;
        }

        .location-text {
          color: orange;
        }

        .website-link, .email-link, .phone-link {
          color: orange;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .website-link:hover, .email-link:hover, .phone-link:hover {
          color: #ffbb33;
        }

        .form-section {
          flex: 1;
          padding: 0 0 0 40px;
          opacity: 0;
          transform: scale(0.95);
          animation: zoomIn 1.5s forwards;
        }

        form {
          background-color: #111;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(255, 153, 0, 0.1);
          border: 1px solid #333;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 8px;
          color: #ff9900;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          border: none;
          border-bottom: 2px solid #ff9900;
          padding: 12px 10px;
          font-size: 1rem;
          background: #222;
          color: #fff;
          outline: none;
          border-radius: 4px;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-bottom: 2px solid #ffbb33;
          background-color: #333;
        }

        .submit-container {
          display: flex;
          justify-content: flex-end;
          margin-top: 30px;
        }

        .submit-button {
          background-color: #ff9900;
          color: white;
          font-size: 1.2rem;
          font-weight: bold;
          padding: 12px 40px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background-color: #ffbb33;
          box-shadow: 0 0 15px rgba(255, 153, 0, 0.5);
        }

        .fade-in {
          animation: fadeInText 1.5s forwards;
        }

        .zoom-in {
          animation: zoomIn 1.5s forwards;
        }

        @keyframes fadeInText {
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .contact-content {
            flex-direction: column;
          }

          .contact-info {
            margin-bottom: 40px;
          }

          .form-section {
            padding: 0;
          }

          .contact-header h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;