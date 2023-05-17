import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/week.css';


function App() {
  const navigate = useNavigate(); 
  return (
    <>
    <h1>Weeks</h1>
      <div className='week-nav'>
        <button onClick={() => navigate('/Select')}>Week 1</button>
        <button onClick={() => navigate('/Select')}>Week 2</button>
        <button onClick={() => navigate('/Select')}>Week 3</button>
        <button onClick={() => navigate('/Select')}>Week 4</button>
        <button onClick={() => navigate('/Select')}>Week 5</button>
    </div>
    </>
  );
}

export default App;
