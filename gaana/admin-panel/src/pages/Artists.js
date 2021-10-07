
import { useState, useEffect } from 'react';
import axios from 'axios'
import {url} from '../common/constants'
import ArtistRow from '../components/ArtistRow';
import { Link } from 'react-router-dom'

const Artists = ()=>{

    const [artists,setArtists]= useState([])

    // do something automatically works same ike onload in html
    // accepts a variable and keep watching the changes
    // when the variable state changes, the function(1st param) gets called
    // keep second param rempty to execute something when component gets loaded
    useEffect(()=>{
        console.log('Artist compo got loaded')
        getArtists()
    },[])

    // fetch data from server using axios. TIP: first check through POSTMAN
    const getArtists = ()=>{               
        axios.get(url + '/artist').then(response =>{
            const result = response.data
            if(result.status === 'success')
            {
                setArtists(result.data)
            }
            else{
                alert('unable to fetch artist data')
            }
        })
    }

    return (
        <div>
           <h1 className="page-title">Artists</h1>
           <Link  to="/addArtist">
           <a className="btn btn-success" >Add Artist</a> 
            </Link>
           
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th></th>
                        <th>Name</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        artists.map((Artist)=>{
                          return <ArtistRow artist = {Artist}/> 
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Artists