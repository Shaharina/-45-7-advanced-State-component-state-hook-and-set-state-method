import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    return (
        <div className='App'>
            <Counter></Counter>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(100);
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return (
        <div>
            <h1 className='p-4 bg-accent text-base-200'> Count : {count}</h1>
            <button onClick={increaseCount}>Increase Count(+)</button>
            <button onClick={decreaseCount}>Decrease Count(-)</button>
        </div>
    );
}

//
//     const decreaseCount = () => setCount(count - 1);

//     // const increaseCount = () => {
//     //     const newCount = count + 1;
//     //     setCount(newCount);
//     // };
//

export default App;
