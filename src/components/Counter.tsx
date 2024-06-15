import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Counter component.
 * 
 * @returns The Counter component.
 */
const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="container">
            <h1 className="display-4">Counter App</h1>
            <h2 className="mb-4">{count}</h2>
            <button className="btn btn-primary mr-2" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-primary" onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
        </div>
    );
}

export default Counter;