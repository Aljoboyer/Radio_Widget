import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { Channel } from '../../components/InterFace/Channelinterface';
import PlayStation from '../../components/PlayStation';
import StationHeader from '../../components/StationHeader';
import { setchannel } from '../../features/RadioWidget/RadioWidgetSlice';

const channel: Channel[] = [
    {name: 'Putin FM', channel: '66,6'},
    {name: 'Dribble FM', channel: '101,2'},
    {name: 'Doge FM', channel: '99,4'},
    {name: 'Ballads FM', channel: '87,1'},
    {name: 'Maximum FM', channel: '142,2'}
]

const RadioWidget: React.FC = () => {
    const dispatch = useDispatch();

    const channelData: Channel = useAppSelector((state) => state.radioStore.channels)

  return (
    <div className="radio_container">
        <div className='station_list'>
           <StationHeader />
                {
                    channel.map(chan => 
                        <>
                            {channelData.channel === chan.channel && <PlayStation />}
                            <div onClick={() => {
                                dispatch(setchannel(chan))
                            }} className='channel'>
                                <h4 className='channel_text'>{chan.name}</h4>
                                <h4 className='channel_text'>{chan.channel}</h4>
                            </div>
                         <hr className='horizontal_line'/>
                        </>
                    )
                }
           
           <div className='station_list_footer'>
               {channelData.name && <><p className='footer_small_text'>CURRENTLY PLAYING</p>
               <h1 className='footer_channel_name'>{channelData.name}</h1></>}
           </div>
        </div>
    </div>
  );
}

export default RadioWidget;
