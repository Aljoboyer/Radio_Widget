import React from 'react'
import backIcons from '../assets/images/back-arrow.png';
import switchs from '../assets/images/switch.png';

const StationHeader = () => {
  return (
    <div className='station_list_header'>
        <img className='station_list_headerImg' src={backIcons} alt="" />
        <h4 className='station_title'>STATIONS</h4>
        <img className='station_list_headerImg' src={switchs} alt="" />
    </div>
  )
}

export default StationHeader
