// import React from 'react';

// const WhatsAppButton = () => {
//   const phoneNumber = '254111991618'; // Replace with your WhatsApp phone number with country code, no '+' or dashes
//   const message = encodeURIComponent('Hello! I would like to get in touch with you.');

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

//   const buttonStyle = {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     backgroundColor: '#25D366',
//     color: 'white',
//     borderRadius: '50%',
//     width: '60px',
//     height: '60px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
//     cursor: 'pointer',
//     zIndex: 1000,
//     textDecoration: 'none',
//   };

//   const svgStyle = {
//     width: '35px',
//     height: '35px',
//   };

//   return (
//     <a href={whatsappUrl} style={buttonStyle} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
//       <svg style={svgStyle} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//         <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6L0 24l6-1.64A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 17.1a9.6 9.6 0 01-5.1-1.5l-.36-.21-3.03.83.83-3.03-.21-.36a9.6 9.6 0 011.5-5.1 9.4 9.4 0 0116.2 0 9.6 9.6 0 01-1.5 5.1 9.4 9.4 0 01-5.1 3.03zm5.1-6.75c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.62.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.28-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.94 4.68 4.12.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z"/>
//       </svg>
//     </a>
//   );
// };

// export default WhatsAppButton;



import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '254111991618'; // Replace with your WhatsApp phone number with country code, no '+' or dashes
  const message = encodeURIComponent('Hello! I would like to get in touch with you.');

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    zIndex: 1000,
    textDecoration: 'none',
  };

  const svgStyle = {
    width: '35px',
    height: '35px',
  };

  const tooltipStyle = {
    position: 'absolute',
    bottom: '70px', // Position above the button
    right: '50%',
    transform: 'translateX(50%)',
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    whiteSpace: 'nowrap',
    visibility: 'hidden', // Initially hidden
    opacity: 0,
    transition: 'opacity 0.3s',
    zIndex: 1001,
  };

  const buttonContainerStyle = {
    position: 'relative', // To position the tooltip relative to the button
  };

  return (
    <div style={buttonContainerStyle}>
      <a href={whatsappUrl} style={buttonStyle} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg style={svgStyle} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6L0 24l6-1.64A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 17.1a9.6 9.6 0 01-5.1-1.5l-.36-.21-3.03.83.83-3.03-.21-.36a9.6 9.6 0 011.5-5.1 9.4 9.4 0 0116.2 0 9.6 9.6 0 01-1.5 5.1 9.4 9.4 0 01-5.1 3.03zm5.1-6.75c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.62.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.28-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.94 4.68 4.12.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z"/>
        </svg>
      </a>
      <div style={tooltipStyle} className="tooltip">
        Chat with me on WhatsApp
        <style>
            
        </style>
      </div>
    </div>
  );
};

export default WhatsAppButton;
