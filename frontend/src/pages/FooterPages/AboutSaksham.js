// import React from 'react';

// function AboutSaksham() {
//   const styles = {
//     container: {
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#ffffff',
//       padding: '40px',
//       borderRadius: '20px',
//       boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
//       maxWidth: '800px',
//       margin: '40px auto',
//       lineHeight: '1.6',
//     },
//     title: {
//       borderBottom: '3px solid #007BFF',
//       paddingBottom: '10px',
//       color: '#333',
//       fontSize: '2em',
//       fontWeight: '600',
//     },
//     subtitle: {
//       color: '#555',
//       fontWeight: '500',
//       fontSize: '1.3em',
//       margin: '20px 0',
//     },
//     listItem: {
//       backgroundColor: '#F7F9FC',
//       padding: '10px 20px',
//       borderRadius: '8px',
//       boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
//       marginBottom: '12px',
//       transition: 'all 0.3s',
//       '&:hover': {
//         backgroundColor: '#E9ECEF',
//         transform: 'translateY(-2px)',
//         boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
//       }
//     },
//     list: {
//       listStyleType: 'none',
//       paddingLeft: '0',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>About Saksham</h1>
//       <p style={styles.subtitle}>Saksham Jain (s3923854):</p>
//       <ul style={styles.list}>
//         {[
//           "Base-React Application Code",
//           "Search Item by Category (Frontend)",
//           "Sign In Page UI (Frontend)",
//           "Sign In Page Functionality (Frontend)",
//           "Integration of Frontend with Backend (Using Axios)",
//           "Updated Backend Controllers to include CORS Policies",
//           "Breadcrumbs Menu for each webpage (User-Friendly UI)",
//           "FilterBar (Sort By & Search for a specific item)",
//           "Official SuperPrice Logo",
//           "Product List Webpage UI (Frontend)",
//           "Product List Webpage Functionality (Frontend)",
//           "Integration of Navbar and Footer with the rest of the website",
//           "Test for Frontend to ensure that it runs without Errors.",
//           "Fixed all CI Errors for build-frontend",
//           "Checkout Page UI (Frontend)",
//           "Checkout Page Functionality (Frontend)",
//           "Cart Page UI (Frontend)",
//           "Cart Page Functionality (Frontend)",
//           "Product Details Page UI (Frontend)",
//           "Product Details Page Functionality (Frontend)",
//           "Product Card UI (Frontend)",
//           "Product Card Functionality (Frontend)",
//           "Navbar Updates (Frontend)",
//         ].map((item, index) => (
//           <li key={index} style={styles.listItem}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AboutSaksham;


import React from 'react';
import NavBar from '../../components/NavBar';  // Adjust the path as necessary
import Footer from '../../components/Footer';  // Adjust the path as necessary

function AboutSaksham() {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            margin: '40px auto',
            lineHeight: '1.6',
        },
        title: {
            borderBottom: '3px solid #007BFF',
            paddingBottom: '10px',
            color: '#333',
            fontSize: '2em',
            fontWeight: '600',
        },
        subtitle: {
            color: '#555',
            fontWeight: '500',
            fontSize: '1.3em',
            margin: '20px 0',
        },
        listItem: {
            backgroundColor: '#F7F9FC',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
            marginBottom: '12px',
            transition: 'all 0.3s',
        },
        list: {
            listStyleType: 'none',
            paddingLeft: '0',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>About Saksham</h1>
            <p style={styles.subtitle}>Saksham Jain (s3923854):</p>
            <ul style={styles.list}>
                {[
                  "Base-React Application Code",
                  "Search Item by Category (Frontend)",
                  "Sign In Page UI (Frontend)",
                  "Sign In Page Functionality (Frontend)",
                  "Integration of Frontend with Backend (Using Axios)",
                  "Updated Backend Controllers to include CORS Policies",
                  "Breadcrumbs Menu for each webpage (User-Friendly UI)",
                  "FilterBar (Sort By & Search for a specific item)",
                  "Official SuperPrice Logo",
                  "Product List Webpage UI (Frontend)",
                  "Product List Webpage Functionality (Frontend)",
                  "Integration of Navbar and Footer with the rest of the website",
                  "Test for Frontend to ensure that it runs without Errors.",
                  "Fixed all CI Errors for build-frontend",
                  "Checkout Page UI (Frontend)",
                  "Checkout Page Functionality (Frontend)",
                  "Cart Page UI (Frontend)",
                  "Cart Page Functionality (Frontend)",
                  "Product Details Page UI (Frontend)",
                  "Product Details Page Functionality (Frontend)",
                  "Product Card UI (Frontend)",
                  "Product Card Functionality (Frontend)",
                  "Navbar Updates (Frontend)",
                ].map((item, index) => (
                    <li key={index} style={styles.listItem}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function AboutSakshamLayout() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <div style={{ flex: '1 0 auto' }}>
                <AboutSaksham />
            </div>
            <div style={{ flexShrink: 0 }}>
                <Footer />
            </div>
        </div>
    );
}

export default AboutSakshamLayout;

