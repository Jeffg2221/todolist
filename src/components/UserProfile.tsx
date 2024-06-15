// Import necessary modules from React and Bootstrap CSS for styling
import React, { useState, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the UserProfile interface to ensure consistent structure for user profile objects
interface UserProfile {
    name: string;
    email: string;
    contact: string;
    photo: string;
}

/**
 * Represents the user profile component.
 */
const UserProfile: React.FC = () => {
    // Initialize the 'user' state with default user profile data
    const [user, setUser] = useState<UserProfile>({
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '1234567890',
        photo: '',
    });

    // Initialize the 'isEditMode' state to track whether the profile is in edit mode
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    // Initialize the 'photoPreview' state to hold the preview of the uploaded photo
    const [photoPreview, setPhotoPreview] = useState<string | ArrayBuffer | null>(null);

    /**
     * Handles the change event for input fields.
     * @param e - The change event.
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // Destructure the name and value from the event target
        setUser({ ...user, [name]: value }); // Update the corresponding property in the user state
    };

    /**
     * Handles the change event for the photo input field.
     * @param e - The change event.
     */
    const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]; // Get the selected file
            const reader = new FileReader(); // Create a FileReader to read the file
            reader.onloadend = () => {
                setPhotoPreview(reader.result); // Update the photoPreview state with the file data URL
                setUser({ ...user, photo: reader.result as string }); // Update the photo property in the user state
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    /**
     * Toggles the edit mode.
     */
    const toggleEditMode = () => {
        setIsEditMode(!isEditMode); // Toggle the value of isEditMode state
    };

    /**
     * Handles the save action.
     */
    const handleSave = () => {
        toggleEditMode(); // Toggle the edit mode when saving
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">User Profile</h2>
            <div className="card p-4">
                <div className="text-center mb-3">
                    <img
                        src={photoPreview ? (photoPreview as string) : 'https://via.placeholder.com/150'} // Display the photoPreview or a placeholder image
                        alt="Profile" // Alt text for the image
                        className="rounded-circle mb-3" // Bootstrap classes for styling the image
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }} // Inline styles for the image
                    />
                    {isEditMode && ( // Conditionally render the photo input field if in edit mode
                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control-file"
                                onChange={handlePhotoChange} // Handle the change event for the photo input
                            />
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    {isEditMode ? ( // Conditionally render the input field or plain text for the name
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={user.name}
                            onChange={handleChange} // Handle the change event for the name input
                        />
                    ) : (
                        <p className="form-control-plaintext">{user.name}</p> // Display the name as plain text if not in edit mode
                    )}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    {isEditMode ? ( // Conditionally render the input field or plain text for the email
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={user.email}
                            onChange={handleChange} // Handle the change event for the email input
                        />
                    ) : (
                        <p className="form-control-plaintext">{user.email}</p> // Display the email as plain text if not in edit mode
                    )}
                </div>
                <div className="form-group">
                    <label>Contact:</label>
                    {isEditMode ? ( // Conditionally render the input field or plain text for the contact
                        <input
                            type="text"
                            name="contact"
                            className="form-control"
                            value={user.contact}
                            onChange={handleChange} // Handle the change event for the contact input
                        />
                    ) : (
                        <p className="form-control-plaintext">{user.contact}</p> // Display the contact as plain text if not in edit mode
                    )}
                </div>
                <div className="text-center">
                {/* // Button to toggle edit mode and save changes */}
                    <button className="btn btn-primary mt-3" onClick={toggleEditMode}> 
                    {/* // Display 'Save' if in edit mode, otherwise 'Edit Profile' */}
                        {isEditMode ? 'Save' : 'Edit Profile'} 
                    </button>
                </div>
            </div>
        </div>
    );
};

// Export the UserProfile component as the default export
export default UserProfile;
