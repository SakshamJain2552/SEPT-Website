import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

const Breadcrumb = ({ category }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb" style={{marginBottom: '50px'}}>
            <Link color="inherit" href="/">
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
    );
}

export default Breadcrumb;
