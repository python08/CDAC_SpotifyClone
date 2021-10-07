import { Link , useHistory,useLocation} from "react-router-dom"
import { useState, useEffect , } from "react"
import axios from "axios"
import { url } from "../common/constants"
const AddSongInAlbum = () => {

    const[title,setTitle] = useState('')
    const[duration,setDuration] = useState('')
    const[songFile,setSongFile] = useState(undefined)


    // use to fetch data passed by previous copmponent
    const location = new useLocation()

    const album = location.state.album

    const history = useHistory()

    // gets called when user selects image
    const onFileSelect =(event)=>{
        const file = event.target.files[0]
        setSongFile(file)
    }

    const  AddSongToDB = () =>{
        
    if(title.length===0)
    {alert('Enter first name')

    }else if (duration.length===0){
        alert('Enter Last name')
    }
    else if(!songFile)
    {
        alert('Select songfile')
    }else{
        // when s file needs to be uploaded use FormData
        const body = new FormData()

        // add the data
        body.append('title',title)
        body.append('duration',duration)
        body.append('artistId',album.artist_id)
        body.append('songFile',songFile)
        body.append('albumId',album.id)
        // else sent data server
        axios.post(url + '/song',body).then((response)=>{
            const result = response.data
            if(result.status ==='success')
            {
                
                alert('Successfully inserted songfile')
                //history.push('/album')
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
    <h1 className="page-title">Add Song</h1>
    <h2>{album.title}</h2>
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
        <label htmlFor="">Track File</label>
        <input accept="audio/*" onChange={onFileSelect} type="file" className="form-control"/>
    </div>
    <div className="mb-3">
        <button onClick={AddSongToDB} className="btn btn-success">Add</button>
        <Link to = "/album">
        <a className="btn btn-warning" >Back</a>
        </Link>
    </div>
</div>
    )
}

export default AddSongInAlbum