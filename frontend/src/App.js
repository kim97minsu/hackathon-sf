import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import tt from '@tomtom-international/web-sdk-maps';



const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
     const script = document.createElement('script');
     script.src = '../node_modules/@tomtom-international/web-sdk-maps/dist/maps-web.min.js';

     document.body.appendChild(script);
     script.async = true;
     script.onload = function () {
       tt.map({
         key: 'AUrYekaUCt8px4UOktVSK2mcGzAypg81',
         style: 'tomtom://vector/1/basic-main',
         container: 'map',
       });
     }

  }, [])

  return (
    <div>
      {user === null ?
        <LoginForm /> :
        console.log('')
      }
    <div id='map'></div>
    </div>
  );
}

export default App;
