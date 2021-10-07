import {url} from '../common/constants'
import { useHistory } from 'react-router'

const AlbumRow = ({album})=>{
    const history = useHistory()
    
    return(
        <tr>
            <td>{album.id}</td>
            <td>
                <img src={url +'/'+album.thumbnail} className="thumbnail-sm" />
            </td>
            <td>{album.title} </td>
            <td>{album.artistname} </td>
            <td>{album.duration} </td>
            <td>
                <button onClick={()=>{
                    // {album:album} -> data neede to pass to the component
                   history.push('/addSongs',{album:album}) 
                }} className="btn btn-success btn-sm">Add Track</button>
            </td>
           
        </tr>
       )
}

export default AlbumRow