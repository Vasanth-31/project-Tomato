import React, { useState } from 'react'
import TamilNaduDetails from './TamilNaduDetails';
import "./image.css"

const ImageMap = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState(null);
  
    const hotspots = [
      { id: 'tamilnadu', coords: '344,717,212,817', region: 'Tamil Nadu' },
      
    ];
  
    const handleHotspotClick = (region) => {
      setSelectedRegion(region);
      setShowDetails(true);
    };
  
    return (
      <div>
        <h1 style={{fontSize: 40 , marginLeft: 30, fontWeight: 700}}>India-Map</h1>
            <p style={{fontSize: 30 , marginLeft: 30}}>"Farming looks mighty easy when your plow is a pencil, and you're a thousand miles from the cornfield."</p>
        <div style={{ display: 'flex' }}>
          <img
            src="/images/state-map.png"
            alt="India Map"
            useMap="#indiaMap"
            style={{ maxWidth: '100%' }}
          />
          {showDetails && selectedRegion === 'Tamil Nadu' && (
            <div style={{ marginLeft: '20px' }}>
              <TamilNaduDetails />
            </div>
          )}
        </div>
        <map name="indiaMap">
          {hotspots.map((hotspot) => (
            <area
              key={hotspot.id}
              shape="rect"
              coords={hotspot.coords}
              onClick={() => handleHotspotClick(hotspot.region)}
            />
          ))}
        </map>
      </div>
    );
  };
  

export default ImageMap;


