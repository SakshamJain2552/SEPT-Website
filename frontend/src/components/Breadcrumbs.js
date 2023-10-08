// import React from 'react';
// import { Breadcrumbs, Link, Typography } from '@mui/material';

// const Breadcrumb = ({ category }) => {
//     return (
//         <Breadcrumbs aria-label="breadcrumb" style={{marginBottom: '50px'}}>
//             <Link color="inherit" href="/">
//                 SignIn
//             </Link>
//             <Link color="inherit" href="/list">
//                 All Products
//             </Link>
//             {category && (
//                 <Typography color="textPrimary">
//                     {category}
//                 </Typography>
//             )}
//         </Breadcrumbs>
//     );
// }

// export default Breadcrumb;

import React from 'react';
import { Breadcrumbs, Link, Typography, Snackbar } from '@mui/material';

const Breadcrumb = ({ category }) => {
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleSignInClick = (event) => {
        const userData = localStorage.getItem("user");
        if (userData) {
            // Prevent the default behavior of the link
            event.preventDefault();
            // Open the snackbar to show the message
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: '50px' }}>
                <Link color="inherit" href="/" onClick={handleSignInClick}>
                    SignIn
                </Link>
                <Link color="inherit" href="/list">
                    All Products
                </Link>
                {category && (
                    <Typography color="textPrimary">
                        {category}
                    </Typography>
                )}
            </Breadcrumbs>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="You are already Signed In"
                action={
                    <React.Fragment>
                        <button onClick={handleCloseSnackbar} style={{color: 'white'}}>
                            Close
                        </button>
                    </React.Fragment>
                }
            />
        </>
    );
}

export default Breadcrumb;
