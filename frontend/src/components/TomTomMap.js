import React, { useState, useEffect } from 'react'
import tt from '@tomtom-international/web-sdk-maps';


const TomTomMap = () => {

  useEffect(() => {
     const script = document.createElement('script');
     script.src = 'node_modules/@tomtom-international/web-sdk-maps/dist/maps-web.min.js';

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

  return <div id="map"></div>

}

export default TomTomMap