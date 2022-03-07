import React from 'react';
import classes from './UI/App.module.css';
import News from './components/News';

function App() {

  return (
     <div className={classes.card}>
        <h1>The Latest News Network </h1>
        <News />
     </div>
  )
};

export default App;
