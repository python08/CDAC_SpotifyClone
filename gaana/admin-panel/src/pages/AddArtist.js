import { Link , useHistory} from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { url } from "../common/constants"
const AddArtist = () => {

    const[id,setId] = useState(0)
    const[thumbnail,setThumbnail] = useState(undefined)
    const[firstname,setFirstname] = useState('')
    const[lastname,setLastname] = useState('')


    const history = useHistory()

    // gets called when user selects image
    const onFileSelect =(event)=>{
        const file = event.target.files[0]
        setThumbnail(file)
    }

    const addArtistToDB = () =>{
    if(id===0)
    {alert('Enter ID')
    }    
    else if(firstname.length===0)
    {alert('Enter first name')
    }else if (lastname.length===0){
        alert('Enter Last name')
    }else if(!thumbnail)
    {
        alert('Select Thumbnail')
    }else{
        // when s file needs to be uploaded use FormData
        const body = new FormData()

        // add the data
        body.append('id',id)
        body.append('firstname',firstname)
        body.append('lastname',lastname)
        body.append('thumbnail',thumbnail)
        // else sent data server
        axios.post(url + '/artist',body).then((response)=>{
            const result = response.data
            if(result.status ==='success')
            {
                alert('Successfully inserted artist')
                history.push('/artists')
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
    <h1>Add Artist</h1>
    <div className="mb-3">
        <label htmlFor="">ID</label>
        <input onChange={(event)=>{
            setId(event.target.value)
        }} type="text" className="form-control"/>
    </div>
    <div className="mb-3">
        <label htmlFor="">First Name</label>
        <input onChange={(event)=>{
            setFirstname(event.target.value)
        }} type="text" className="form-control"/>
    </div>
    <div className="mb-3">
        <label htmlFor="">Last Name</label>
        <input onChange={(event)=>{
            setLastname(event.target.value)
        }} type="text" className="form-control"/>
    </div>
    <div className="mb-3">
        <label htmlFor="">thumbnail</label>
        <input accept="image/*" onChange={onFileSelect} type="file" className="form-control"/>
    </div>
    <div className="mb-3">
        <button onClick={addArtistToDB} className="btn btn-success">Add</button>
        <Link to = "/artists">
        <a className="btn btn-warning" >Back</a>
        </Link>
    </div>
</div>
    )
}

export default AddArtist