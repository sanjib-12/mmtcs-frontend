// import React from 'react';
// import { useAuth } from '../Contexts/AuthContext';
// import{ Button } from 'antd';
// const Dashboard = () =>{
//     const {logout} = useAuth();
//     return  <Button onClick={logout}>Logout</Button>
// }

// export default Dashboard;


// src/pages/dashboard.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import{ Button } from 'antd';

import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useAuth } from '../Contexts/AuthContext';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuamliLTEyIiwiYSI6ImNsd3phYzFtaTA1c2sya29wMWFoNmZpZmMifQ.kErcDiFqcs2QkU01GYH5Cw';

const Dashboard = () => {
    const {logout} = useAuth();

  const mapContainer = useRef(null);

  useEffect(() => {
    const successLocation = (position) => {
      setupMap([position.coords.longitude, position.coords.latitude]);
    };

    const errorLocation = () => {
      setupMap([-2.24, 53.48]);
    };

    const setupMap = (center) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      });

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);

      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });

      map.addControl(directions, 'top-left');
    };

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true
    });

  }, []);

  return   <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
  <Button 
    onClick={logout} 
    style={{ 
      position: 'absolute', 
      bottom: '10px', 
      left: '10px',
      zIndex: 10 
    }}
  >
    Logout
  </Button>
  <div ref={mapContainer} style={{ height: '100%', width: '100%' }}></div>
</div>
};

export default Dashboard;
