import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div data-test='component-app'>
      App
      <div data-test='counter-display'>
        the counter is currently &nbsp;
        <span data-test='count'>{count}</span>
      </div>
      <button data-test='increment-button' onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>
    </div>
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <p>Learn React</p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
