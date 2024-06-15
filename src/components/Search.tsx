// Import necessary modules and hooks from React
import React, { useState } from 'react';
// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the Product interface to ensure consistent structure for product objects
interface Product {
    name: string;        // Name of the product
    price: number;       // Price of the product
    description: string; // Description of the product
}

/**
 * Search component that allows users to search for products.
 * This is a functional React component for searching and displaying a list of products.
 */
const Search: React.FC = () => {
    // State to store the search query input by the user
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Array of product objects, each following the Product interface structure
    const products: Product[] = [
        { name: 'Product 1', price: 99.99, description: 'Description for product 1' },
        { name: 'Product 2', price: 149.99, description: 'Description for product 2' },
        { name: 'Product 3', price: 199.99, description: 'Description for product 3' },
        { name: 'Product 4', price: 249.99, description: 'Description for product 4' },
        { name: 'Product 5', price: 299.99, description: 'Description for product 5' }
    ];

    // Filter the products array based on the search query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Check if product name includes the search query
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) // Check if product description includes the search query
    );

    // JSX to render the search component
    return (
        <div className="container mt-5">
            <h2>Product List</h2>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control" // Bootstrap class for styling the input field
                    placeholder="Search products..." // Placeholder text for the input field
                    value={searchQuery} // Bind input value to searchQuery state
                    onChange={e => setSearchQuery(e.target.value)} // Update searchQuery state when input value changes
                />
            </div>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product, index) => (
                        // Render a table row for each filtered product
                        <tr key={index}>
                            {/* Display the product name */}
                            <td>{product.name}</td> 
                            {/* // Display the product price formatted to 2 decimal places */}
                            <td>${product.price.toFixed(2)}</td>
                            {/* Display the product description */} 
                            <td>{product.description}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Export the Search component as the default export
export default Search;
