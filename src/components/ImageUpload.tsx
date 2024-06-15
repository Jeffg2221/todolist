import React, { useState, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the ImageUpload component as a functional component using React.FC
const ImageUpload: React.FC = () => {
    // Define a state variable 'image' to hold the uploaded image data
    // The state can be a string, ArrayBuffer, or null
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);

    // Define the handleImageChange function to handle the file input change event
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Check if files are selected and the first file is available
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]; // Get the first selected file
            const reader = new FileReader(); // Create a new FileReader instance
            // Define the onloadend event handler for the FileReader
            reader.onloadend = () => {
                setImage(reader.result); // Update the image state with the result
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    // JSX to render the ImageUpload component
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Upload Image</h2>
                    <div className="mb-3">
                        <label htmlFor="imageUpload" className="form-label">Choose file</label>
                        <input
                            type="file" // Input type is file for file selection
                            className="form-control" // Bootstrap class for styling
                            id="imageUpload" // ID for the input element
                            onChange={handleImageChange} // Attach the handleImageChange function to the onChange event
                        />
                    </div>
                    {image && ( // Conditionally render the image preview if image state is not null
                        <div className="mt-4 d-flex justify-content-center">
                            <img
                                src={image as string} // Set the image source to the uploaded image
                                alt="Uploaded" // Alt text for the image
                                className="img-thumbnail" // Bootstrap class for styling
                                style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }} // Inline styles for the image
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Export the ImageUpload component as the default export
export default ImageUpload;

