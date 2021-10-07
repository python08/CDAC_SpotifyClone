import {url} from '../common/constants'
const ArtistRow = ({artist})=>{
    return(
        <tr>
            <td>{artist.id}</td>
            <td>
                <img src={url +'/'+artist.thumbnail} className="thumbnail-sm" />
            </td>
            <td>{artist.firstname} </td>
            <td></td>
           
        </tr>
       )
}

export default ArtistRow