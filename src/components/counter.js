import {useState} from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>

            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Azalt</button>
            <button onClick={() => setCount(count + 1)}>Artır</button>
        </div>
    );
}

export default Counter;
