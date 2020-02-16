import React, { useState } from 'react'
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState(null)


  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
