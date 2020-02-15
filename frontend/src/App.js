import React, { useState } from 'react'
import LoginForm from './components/LoginForm'

const App = () => {
  const [user, setUser] = useState(null)


  return (
    <div>
      {user === null ?
        <LoginForm /> :
        console.log('')
      }
    </div>
  );
}

export default App;
