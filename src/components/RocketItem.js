import React from 'react';
import placeholder from '../assets/placeholder.jpeg';
import '../styles/Rockets.css';

const RocketItem = () => (
  <>
    <div className="rocket">
      <img src={placeholder} alt="placeholder" />
      ;
      <div className="detail-container">
        <h1>Falcon 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel sem et
          lectus convallis tristique sit amet et massa. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Proin condimentum urna nec massa scelerisque, eu facilisis purus
          aliquam.
        </p>
        <button type="button" id="reserve-btn">
          Reserve Rocket
        </button>
      </div>
    </div>
  </>
);

export default RocketItem;