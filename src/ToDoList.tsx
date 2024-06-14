import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

interface ToDoItem {
    id: number;
    content: string;
}

const ToDoList: React.FC = () => {
    const [newItem, setNewItem] = useState<string>('');
    const [items, setItems] = useState<ToDoItem[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value);
    };

    const handleAddItem = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newItem.trim() === '') return;

        const newToDo: ToDoItem = { id: Date.now(), content: newItem };
        setItems([...items, newToDo]);
        setNewItem('');
    };

    const handleRemoveItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="container"> {/* Add Bootstrap container class */}
            <form onSubmit={handleAddItem}>
                <div className="input-group mb-3"> {/* Add Bootstrap input-group class */}
                    <input
                        type="text"
                        value={newItem}
                        onChange={handleInputChange}
                        className="form-control" 
                        placeholder="Enter a new to-do item"
                    />
                    <div className="input-group-append"> {/* Add Bootstrap input-group-append class */}
                        <button type="submit" className="btn btn-primary">Add</button> {/* Add Bootstrap btn and btn-primary classes */}
                    </div>
                </div>
            </form>
            <h2>Items</h2>
            <ul className="list-group"> {/* Add Bootstrap list-group class */}
                {items.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center"> {/* Add Bootstrap list-group-item, d-flex, justify-content-between, and align-items-center classes */}
                        {item.content}
                        <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger">Remove</button> {/* Add Bootstrap btn and btn-danger classes */}
                    </li>
                ))}
            </ul>
        </div>
    );
};
// Export the component
export default ToDoList;
