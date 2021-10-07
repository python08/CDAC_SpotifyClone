import { Link , useHistory} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { url } from "../common/constants"
const AddAlbum = () => {

    const[id,setId] = useState(0)
    const[title,setTitle] = useState('')
    const[duration,setDuration] = useState('')
    const[artist,setArtist] = useState(-1)
    const[artists,setArtists] = useState([]) // to get data in Drop Down
    const[thumbnail,setThumbnail] = useState(-1)

    useEffect(()=>{
        getArtists()
    },[])

     // fetch data from server using axios. TIP: first check through POSTMAN
     const getArtists = ()=>{               
        axios.get(url + '/artist').then(response =>{
            const result = response.data
            if(result.status === 'success')
            {
                if(result.data.length>0){   // use to select default or first appeared artist name
                    setArtist(result.data[0])
                    setArtists(result.data)
                }
                
            }
            else{
                alert('unable to fetch album data')
            }
        })
    }


    const history = useHistory()

    // gets called when user selects image
    const onFileSelect =(event)=>{
        const file = event.target.files[0]
        setThumbnail(file)
    }

    const  AddAlbumToDB = () =>{
    if(id===0)
    {alert('Enter first name')

    }
    else if(title.length===0)
    {alert('Enter first name')

    }else if (duration.length===0){
        alert('Enter Last name')
    }else if (artist === -1){
        alert('Select artist')
    }
    else if(!thumbnail)
    {
        alert('Select Thumbnail')
    }else{
        // when s file needs to be uploaded use FormData
        const body = new FormData()

        // add the data
        body.append('id',id)
        body.append('title',title)
        body.append('duration',duration)
        body.append('artist_id',artist)
        body.append('thumbnail',thumbnail)
        // else sent data server
        axios.post(url + '/album',body).then((response)=>{
            const result = response.data
            if(result.status ==='success')
            {
                
                alert('Successfully inserted album')
                history.push('/album')
            }
            else
            {
                alert('Error occured')
            }
        })
    }
}

    return(
<div>
    <h1>Add Album</h1>
    <div className="mb-3">
        <label htmlFor="">ID</label>
        <input onChange={(event)=>{
            setId(event.target.value)
        }} type="text" className="form-control"/>
    </div>
    <div className="mb-3">
        <label htmlFor="">Title</label>
        <input onChange={(event)=>{
            setTitle(event.target.value)
        }} type="text" className="form-control"/>
    </div>
    <div className="mb-3">
        <label htmlFor="">Duration</label>
        <input onChange={(event)=>{
            setDuration(event.target.value)
        }} type="text" className="form-control"/>
    </div>
    <div className="mb-3">
        <label htmlFor="">Artist</label>
        <select onChange={(event)=>{
            setArtist(event.target.value)
        }} className="form-control">
        {
            artists.map((artist)=>{
                return(
                    <option value={artist.id}>
                        {artist.firstname}
                    </option>
                )
            })
        }
        </select>
        
    </div>
    <div className="mb-3">
        <label htmlFor="">Thumbnail</label>
        <input accept="image/*" onChange={onFileSelect} type="file" className="form-control"/>
    </div>
    <div className="mb-3">
        <button onClick={AddAlbumToDB} className="btn btn-success">Add</button>
        <Link to = "/album">
        <a className="btn btn-warning" >Back</a>
        </Link>
    </div>
</div>
    )
}

export default AddAlbum