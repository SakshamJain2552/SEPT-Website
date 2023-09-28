// import React from 'react';
// import { Card, CardContent, CardHeader, Typography, CardActionArea, CardMedia, Button } from '@mui/material';
// import image from './288-2881831_grey-food-icon-png-transparent-png.png';
// import CheckIcon from '@mui/icons-material/Check';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import images from './images/product_1.png';

// const imgPath = './images/product_1.png';

// export default function ActionAreaCard({ product }) {
//     console.log(product);
  
//     return (
//       <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
//         <CardActionArea style={{ flexGrow: 1 }}>
//           <CardMedia component="img" sx={{ height: 300 }} image={product.imagePath} title="Product Name" />
//           <CardHeader title={product.productName} subheader={`Store name: ${product.storeName}`} />
//           <CardContent>
//             <Typography variant="body2" color="textSecondary">
//               {product.description}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               <strong>Lowest Price:</strong> <span style={{ fontWeight: 'bold' }}>{product.price}</span>
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <div style={{ marginTop: 'auto', padding: '8px', textAlign: 'center' }}>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<ShoppingCartIcon />}
//             style={{ borderRadius: '50px', marginBottom: '4px' }}
//           >
//             Add to Cart
//           </Button>
//           <Typography variant="body2" color="textSecondary">
//             <CheckIcon style={{ color: 'green' }} /> In Stock
//           </Typography>
//         </div>
//       </Card>
//     );
//   }

import React from 'react';
import { Card, CardContent, CardHeader, Typography, CardActionArea, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // <-- Import this
import image from './288-2881831_grey-food-icon-png-transparent-png.png';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ActionAreaCard({ product }) {
  
    return (
      <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Wrap the CardActionArea with Link */}
        <Link to={`/product/${product.productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <CardActionArea style={{ flexGrow: 1 }}>
            <CardMedia component="img" sx={{ height: 300 }} image={product.imagePath} title="Product Name" />
            <CardHeader title={product.productName} subheader={`Store name: ${product.storeName}`} />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {product.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Lowest Price:</strong> <span style={{ fontWeight: 'bold' }}>{product.price}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <div style={{ marginTop: 'auto', padding: '8px', textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            style={{ borderRadius: '50px', marginBottom: '4px' }}
          >
            Add to Cart
          </Button>
          <Typography variant="body2" color="textSecondary">
            <CheckIcon style={{ color: 'green' }} /> In Stock
          </Typography>
        </div>
      </Card>
    );
}
