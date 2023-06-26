import React from 'react';
import Button from './Button.jsx';

const App = () => {

  const handleClick = () => {
      console.log('Button clicked!');
  }
  
      return (
        <>
        <Button onClick={handleClick} label='Here'></Button>
        <ul>
          <li>Bread</li>
          <li>Milk</li>
          <li>Rain</li>
          <li>Water</li>
        </ul>
        </>
      )
}  

export default App;