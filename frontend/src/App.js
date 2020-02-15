import React, { useState } from 'react'
import LoginForm from './components/LoginForm'

const App = () => {
  const [user, setUser] = useState(null)


  return (
    <div>
      {user === null ?
        <LoginForm /> :
        <h1>Loading...</h1>
      }
    </div>
  );
}

export default App;
