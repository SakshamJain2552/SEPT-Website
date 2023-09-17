// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function BookList() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     // Make a GET request to your API endpoint
//     axios.get('http://localhost:8080/v1/books')
//       .then(response => {
//         // Set the retrieved data to the 'books' state
//         setBooks(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // The empty dependency array ensures this effect runs once when the component mounts

//   return (
//     <div>
//       <h1>Book List</h1>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>
//             <h2>{book.title}</h2>
//             <p>Author(s): {book.authors}</p>
//             <p>Synopsis: {book.synopsis}</p>
//             <p>Released: {book.released}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BookList;

// import React, { useState, useEffect } from 'react';
// import { Grid, Button, Stack, Pagination } from '@mui/material';
// import ProductCard from './ProductCard';
// import FilterBar from './filterbar';
// import axios from 'axios';

// const Productlist = () => {
//     const itemsPerPage = 4; // Number of products per page
//     const [currentPage, setCurrentPage] = useState(1);

//     const [sortOrder, setSortOrder] = useState(""); // name or price
//     const [searchQuery, setSearchQuery] = useState(""); // search by name
    
//     // 2. Create a new state variable for products
//     const [products, setProducts] = useState([]);

//     // 3. Fetch products using Axios inside useEffect
//     useEffect(() => {
//         axios.get('http://localhost:8081/products')
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the products", error);
//             });
//     }, []); // The empty dependency array ensures this useEffect runs once when component mounts

//     // Filtering by search query and sorting logic
//     const filteredProducts = products
//         .filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()))
//         .sort((a, b) => {
//             if (sortOrder === "name") {
//                 return a.productName.localeCompare(b.productName);
//             } else if (sortOrder === "price") {
//                 return b.price - a.price;
//             }
//             return 0;
//         });


//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const DisplayedProducts = filteredProducts.slice(startIndex, endIndex);

//     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//     useEffect(() => {
//         if (currentPage > totalPages) {
//             setCurrentPage(1);
//         }
//     }, [filteredProducts, totalPages, currentPage]);

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const renderPaginationButtons = () => {
//         const handlePageChangeMUI = (event, page) => {
//             setCurrentPage(page);
//         };
  
//         return (
//             // <Stack spacing={2}>
//             <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
//                 <Pagination
//                     size="large"
//                     showFirstButton showLastButton
//                     defaultPage={6}
//                     count={totalPages}
//                     page={currentPage}
//                     variant="outlined"
//                     color='primary'
//                     onChange={handlePageChangeMUI}
//                 />
//                 {/* </Stack> */}
//             </div>
//         );
//     };
    
//     const countText = `${startIndex + 1} - ${Math.min(endIndex, filteredProducts.length)} of ${filteredProducts.length} results`;
    
//     return (
//         <div style={{ flex: 1 }}>
//             <FilterBar onSortChange={setSortOrder} onSearchChange={setSearchQuery} />
//             <p>{countText}</p>
//             <Grid container spacing={2}>
//                 {DisplayedProducts.map((product) => (
//                     <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//                         <ProductCard product={product} />
//                     </Grid>
//                 ))}
//             </Grid>
//             <div className="pagination" style={{ textAlign: 'right' }}>
//                 {renderPaginationButtons()}
//             </div>
//         </div>
//     );
// }

// export default Productlist;

import React, { useState, useEffect } from 'react';
import { Grid, Pagination, useMediaQuery, useTheme } from '@mui/material';
import ProductCard from './ProductCard';
import FilterBar from './filterbar';
import axios from 'axios';
import Sidebar from './sidebar';
import Breadcrumb from './Breadcrumbs';

const Productlist = () => {
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState(""); // name or price
    const [searchQuery, setSearchQuery] = useState(""); // search by name
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        axios.get('http://localhost:8081/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products", error);
            });
    }, []);

    const filteredProducts = products
        .filter(product => 
            product.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedCategory === "" || product.category.toLowerCase() === selectedCategory.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === "name") {
                return a.productName.localeCompare(b.productName);
            } else if (sortOrder === "price") {
                return b.price - a.price;
            }
            return 0;
        });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const DisplayedProducts = filteredProducts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [filteredProducts, totalPages, currentPage]);

    const handlePageChangeMUI = (event, page) => {
        setCurrentPage(page);
    };

    const countText = `${startIndex + 1} - ${Math.min(endIndex, filteredProducts.length)} of ${filteredProducts.length} results`;
    
    return (
        // <div style={{ flex: 1, marginLeft: '450px', marginRight: '200px', marginTop: '100px', width: '80%'}}>
        //     <Sidebar onCategoryChange={setSelectedCategory} />
        //     <Breadcrumb category={selectedCategory} />
        //     <FilterBar onSortChange={setSortOrder} onSearchChange={setSearchQuery} />
        //     <p>{countText}</p>
        //     <Grid container spacing={2}>
        //         {DisplayedProducts.map((product) => (
        //             <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
        //                 <ProductCard product={product} />
        //             </Grid>
        //         ))}
        //     </Grid>

        <div style={{ flex: 1, marginLeft: isMobile ? '10px' : '450px', marginRight: isMobile ? '10px' : '200px', width: isMobile ? '95%' : ''}}>
        {!isMobile && <Sidebar onCategoryChange={setSelectedCategory} />}
        <Breadcrumb category={selectedCategory} />
        <FilterBar onSortChange={setSortOrder} onSearchChange={setSearchQuery} />
        <p>{countText}</p>
        <Grid container spacing={2}>
            {DisplayedProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
            <div className="pagination"  style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Pagination
                    size="large"
                    showFirstButton showLastButton
                    count={totalPages}
                    page={currentPage}
                    variant="outlined"
                    color='primary'
                    onChange={handlePageChangeMUI}
                />
            </div>
        </div>
    );
}

export default Productlist;
