import { url } from '../common/url'
import { useHistory } from 'react-router'
import { useState } from 'react'
import { useRef } from 'react';
import '../css/SongRow.css'
import pause1 from '../images/pause.png'
import play1 from '../images/play.png'
import {play,pause} from '../actions/counterActions'
import { useDispatch, useSelector } from 'react-redux'




const SongRow = ({song, index ,audio })=>{
     const [isPlaying, setIsPlaying] = useState(false);
    // const myRef = useRef();
    // const startAudio = () => {
    //     myRef.current.play();
    //     changeAudioStatus(true);
    // };

    // const pauseAudio = () => {
    //     console.log("here");
    //     myRef.current.pause();
    //     changeAudioStatus(false);
    // };

  const counter = useSelector((state) => state.counter)
  console.log(counter)
    const dispatch = useDispatch()
    
    const playSong = () =>{
        dispatch(play(audio))
        setIsPlaying(true)
    }

    const pauseSong = () =>{
        dispatch(pause(audio))
        setIsPlaying(false)
    }

    return(
        <tr >
            <td className="color">{index +1}</td>
            <td className="color">
                <img src={url +'/'+song.thumbnail} className="small-thumbnail" />
            </td >
            <td className="color">{song.title} </td>
            <td className="color">{song.duration} </td>
            <td>
                {
                    isPlaying ? <img onClick={pauseSong} className="play-pause" src={pause1} /> : <img onClick={playSong} className="play-pause" src={play1} />
                } 
            </td>
           
        </tr>
       )
}


export default SongRow



 // 
 




// const SongRow = ({song, index ,audio })=>{
//     // const [isPlaying, changeAudioStatus] = useState(false);
//      const [isPlaying,setIsPlaying] = useState(false)
//     const history = useHistory()
//     // const myRef = useRef();
//     // const startAudio = () => {
//     //     myRef.current.play();
//     //     changeAudioStatus(true);
//     // };

//     // const pauseAudio = () => {
//     //     console.log("here");
//     //     myRef.current.pause();
//     //     changeAudioStatus(false);
//     // };
//     const togglePlaying = () => {
//         if(isPlaying){
//             audio.pause()
//             console.log('pause')
//             setIsPlaying(false)
//         }else{

//             audio.play()   
//             setIsPlaying(true)
//             console.log('playing')
//         }
//     }

//     return(
//         <tr >
//             <td className="color">{index +1}</td>
//             <td className="color">
//                 <img src={url +'/'+song.thumbnail} className="small-thumbnail" />
//             </td >
//             <td className="color">{song.title} </td>
//             <td className="color">{song.duration} </td>
//             <td>
//                 {/* <audio
//                 ref={myRef}
//                 src={url + '/' + song.songFile}
//                 /> */}
//                 {isPlaying == true && ( 
//                      <img onClick={togglePlaying} className="play-pause" src={pause} /> )}
//                 {isPlaying == false && ( 
//                      <img onClick={togglePlaying} className="play-pause" src={play} /> )}
               
//             </td>
           
//         </tr>
//        )
// }

// export default SongRow