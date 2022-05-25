import React from 'react';
import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';
import playStation from '../assets/images/playstation.png'

const PlayStation = () => {
  return (
    <div className='play_station'>
      <img className='play_station_icons' src={plus} alt="" />
      <img className='play_station_img' src={playStation} alt="" />
      <img className='play_station_icons' src={minus} alt="" />
    </div>
  );
}

export default PlayStation;
