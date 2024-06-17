// Import necessary modules and hooks from React
import React, { useState, ChangeEvent, FormEvent } from 'react';
// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Represents a to-do item.
 * This interface defines the shape of a to-do item object.
 */
interface ToDoItem {
    id: number;         // Unique identifier for the to-do item
    content: string;    // The content/text of the to-do item
}

/**
 * A component that displays a to-do list.
 * This is a functional React component for managing and displaying a to-do list.
 */
const ToDoList: React.FC = () => {
    // State to store the new item input value
    const [newItem, setNewItem] = useState<string>('');
    // State to store the list of to-do items
    const [items, setItems] = useState<ToDoItem[]>([]);

    /**
     * Handles the change event of the input field.
     * @param event - The change event triggered by the input field.
     */
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Update the newItem state with the current input value
        setNewItem(event.target.value);
    };

    /**
     * Handles the form submission event.
     * @param event - The form submission event triggered by the form.
     */
    const handleAddItem = (event: FormEvent<HTMLFormElement>) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Do nothing if the new item input is empty or contains only whitespace
        if (newItem.trim() === '') return;

        // Create a new to-do item object
        const newToDo: ToDoItem = { id: Date.now(), content: newItem };
        // Add the new to-do item to the items state array
        setItems([...items, newToDo]);
        // Clear the input field by resetting the newItem state
        setNewItem('');
    };

    /**
     * Handles the removal of an item.
     * @param id - The ID of the item to be removed.
     */
    const handleRemoveItem = (id: number) => {
        // Filter out the item with the given ID and update the items state
        setItems(items.filter(item => item.id !== id));
    };

    // JSX to render the to-do list component
    return (
        <div className="container">
            <form onSubmit={handleAddItem}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={newItem} // Bind input value to newItem state
                        onChange={handleInputChange} // Handle input change events
                        className="form-control" 
                        placeholder="Enter a new to-do item" // Placeholder text for the input
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
            <h2>Items</h2>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.content} 
                        <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger">Remove</button> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Export the ToDoList component as the default export
export default ToDoList;
