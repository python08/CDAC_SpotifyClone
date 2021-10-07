

import { useState, useEffect } from 'react';
import axios from 'axios'
import {url} from '../common/constants'
import AlbumRow from '../components/AlbumsRow';
import { Link } from 'react-router-dom';

const Albums = ()=>{

    const [Albums,setAlbums]= useState([])

    // do something automatically works same ike onload in html
    // accepts a variable and keep watching the changes
    // when the variable state changes, the function(1st param) gets called
    // keep second param rempty to execute something when component gets loaded
    useEffect(()=>{
        console.log('Albums compo got loaded')
        getAlbums()
    },[])

    // fetch data from server using axios. TIP: first check through POSTMAN
    const getAlbums = ()=>{               
        axios.get(url + '/album').then(response =>{
            const result = response.data
            if(result.status === 'success')
            {
                setAlbums(result.data)
            }
            else{
                alert('unable to fetch Albums data')
            }
        })
    }

    return (
        <div>
           <h1 className="page-title">Albums</h1>
            <Link to="/addAlbum">
           <a className="btn btn-success" >Add Albums</a> 
           </Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th></th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Duration</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Albums.map((Albums)=>{
                          return <AlbumRow album = {Albums}/> 
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Albums