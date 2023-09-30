import React from 'react';
import "./image.css"

const TamilNaduDetails = () => {
        const tamilNaduInfo = {
          name: 'Tamil Nadu',
          district: 'Coimbatore',
          population: '72 million',
          production: 22000,
          wasteRate: 8,
          farmingPlace: 'Green Valley Farms',
          profitPercentage: 18,
        };
      
        return (
          <div className='info-Container'>
            <h2>{tamilNaduInfo.name}</h2>
            <p>District: {tamilNaduInfo.district}</p>
            <p>Population: {tamilNaduInfo.population}</p>
            <p>Production: {tamilNaduInfo.production}</p>
            <p>Waste Rate: {tamilNaduInfo.wasteRate}</p>
            <p>Farming Place: {tamilNaduInfo.farmingPlace}</p>
            <p>Profit Percentage:{tamilNaduInfo.profitPercentage}</p>
          </div>
        );
      };

export default TamilNaduDetails
