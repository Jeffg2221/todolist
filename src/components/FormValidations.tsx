// Import necessary modules from React and Bootstrap CSS for styling
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Component for form validations.
 */
const FormValidations: React.FC = () => {
    // State variables for form fields
    const [name, setName] = useState<string>(''); // State for name input field
    const [email, setEmail] = useState<string>(''); // State for email input field
    const [contact, setContact] = useState<string>(''); // State for contact input field
    const [password, setPassword] = useState<string>(''); // State for password input field
    const [isFormValid, setIsFormValid] = useState<boolean>(false); // State to track overall form validity
    const [submittedData, setSubmittedData] = useState<{ // State to hold submitted form data
        name: string;
        email: string;
        contact: string;
        password: string;
    } | null>(null);

    // Validation logic
    useEffect(() => {
        // Validation checks for each form field
        const isNameValid = name.trim() !== ''; // Check if name is not empty
        const isEmailValid = email.includes('@'); // Basic email format validation
        const isContactValid = /^\d{10}$/.test(contact); // Validate contact number format (10 digits)
        const isPasswordValid = password.length >= 8; // Check if password length is at least 8 characters

        // Update form validity state based on all validation checks
        setIsFormValid(isNameValid && isEmailValid && isContactValid && isPasswordValid);
    }, [name, email, contact, password]); // Dependency array ensures validation runs when these state values change

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent default form submission behavior

        if (isFormValid) { // Check if the form is valid before proceeding
            // Store submitted form data in state
            setSubmittedData({ name, email, contact, password });
        }
    };

    // JSX to render the form and submitted data
    return (
        <div className="container mt-5">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Update name state on input change
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)} // Update contact state on input change
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!isFormValid}>Submit</button> {/* Disable button if form is invalid */}
            </form>
            {submittedData && ( // Display submitted data section if submittedData is not null
                <div className="mt-4">
                    <h3>Submitted Data</h3>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Contact:</strong> {submittedData.contact}</p>
                    <p><strong>Password:</strong> {submittedData.password}</p>
                </div>
            )}
        </div>
    );
};

// Export the FormValidations component as the default export
export default FormValidations;
