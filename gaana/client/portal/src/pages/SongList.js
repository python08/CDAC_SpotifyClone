
import { useLocation } from 'react-router';
import { url } from '../common/url';
import './Songlist.css'
import SongRow from './SongRow';



const SongList = ()=>{


    const location = useLocation()
    const songs = location.state.song

    return (
        <div className="song-list-container">
           <div className="row content-align">
                <div className="col-2"></div>
                <img className="thumbnail" src={url + '/' + location.state.thumbnail} />
                <div className="col">
                <h3 className="title">{location.state.title}</h3>
                <div >Rap God</div>
                </div>
           </div>
           <div>
           <h1 className="page-title">Tracks</h1>
           
           
            <table className="table table-striped text-color">
                <thead>
                    <tr>
                        <th>#</th>
                        <th></th>
                        <th>title</th>
                        <th>duration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-color">
                    {
                       
                        songs.map((song , index)=>{
                            const audio = new Audio(url + '/' + song.songFile) 
                            
                          return <SongRow song = {song} index={index} audio={audio} /> 
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default SongList