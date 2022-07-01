import './App.css';
import { useEffect, useState } from 'react';

function App() {
    return <div className='App'></div>;
}

// function App() {
//     return (
//         <div className='App'>
//             <hr />
//             <Counter></Counter>
//             <br />
//             <hr />
//             <ExternalUsers></ExternalUsers>
//         </div>
//     );
// }
// function ExternalUsers() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(data => setUsers(data));
//     }, []);
//     return (
//         <div>
//             <h2>EXTERNAL USERS</h2>
//             <p> {users.length} </p>
//             {users.map(user => (
//                 <User name={user.name}></User>
//             ))}
//         </div>
//     );
// }

// function User(props) {
//     return (
//         <div style={{ border: '2px solid white', margin: '20px' }}>
//             <h3>Name : {props.name} </h3>
//             <p>Email : {props.email} </p>
//         </div>
//     );
// }

// function Counter() {
//     const [count, setCount] = useState(100);
//     const increaseCount = () => setCount(count + 1);
//     const decreaseCount = () => setCount(count - 1);

//     return (
//         <div>
//             <h1 className='p-4 bg-accent text-base-200'> Count : {count}</h1>
//             <button onClick={increaseCount}>Increase Count(+)</button>
//             <button onClick={decreaseCount}>Decrease Count(-)</button>
//         </div>
//     );
// }

//
//     const decreaseCount = () => setCount(count - 1);

//     // const increaseCount = () => {
//     //     const newCount = count + 1;
//     //     setCount(newCount);
//     // };
//

export default App;
