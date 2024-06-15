import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

// Define the UserDetails component as a functional component using React.FC
const UserDetails: React.FC = () => {
    // Define a state variable 'users' to hold an array of user objects, initially empty
    const [users, setUsers] = useState<User[]>([]);
    // Define a state variable 'loading' to track loading state, initially true
    const [loading, setLoading] = useState<boolean>(true);

    // useEffect hook to perform side effects (like data fetching) after the component mounts
    useEffect(() => {
        // Fetch user data from the provided API endpoint
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) // Parse the response as JSON
            .then(data => {
                setUsers(data);    // Update the 'users' state with the fetched data
                setLoading(false); // Set 'loading' state to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching user data:', error); // Log any errors that occur
                setLoading(false); // Set 'loading' state to false if an error occurs
            });
    }, []); // Empty dependency array means this effect runs once after the initial render


    // JSX to render the UserDetails component
    return (
        <div className="container mt-5">
            <h2>User Details</h2>
            {loading ? ( // Conditional rendering based on the 'loading' state
                <div>Loading...</div> // Display loading message while data is being fetched
            ) : ( // If not loading, display the user data in a table
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => ( // Map over the 'users' state to create table rows for each user
                        // Each row must have a unique 'key' prop, using user ID as the key
                            <tr key={user.id}>
                                {/* //Display user ID  */}
                                <td>{user.id}</td>
                                {/* //Display user name */} 
                                <td>{user.name}</td> 
                                {/* //Display user email */}
                                <td>{user.email}</td> 
                                {/* //Display user phone */}
                                <td>{user.phone}</td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

// Export the UserDetails component as the default export
export default UserDetails;

