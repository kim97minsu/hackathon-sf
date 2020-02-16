import React, { useState } from 'react'
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState(null)


  return (
    <div>
      {/* {user === null ?
        <LoginForm /> :
<<<<<<< HEAD
        console.log('')
      } */}
      <Home />
=======
        <h1>Loading...</h1>
      }
>>>>>>> 6cfe783f56f765c85df78aed8e0b9d78398d198b
    </div>
  );
}

export default App;
