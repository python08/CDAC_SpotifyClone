import axios from 'axios'
import { useState , useEffect } from 'react'
import {url} from '../common/url'
import HorizontalSlider from '../components/HorizontalSlider'
import { useHistory } from 'react-router-dom'
const Home = () => {
  const [artists,setArtists] = useState([])
  const [albums,setAlbums] = useState([])

  const history = useHistory()

  useEffect(()=>{
    getArtists()
    getAlbums()
  },[])

  const getAlbums = () =>{
  axios.get(url +'/album').then((response)=>{
      const result = response.data
      if(result.status ==='success')
      {
        setAlbums(result.data)
      
      }else{
        alert('error occured while fetching albums')
      }
     
    })
  }

  const getArtists = () =>{
   
  
    axios.get(url +'/artist').then((response)=>{
      const result = response.data
      if(result.status ==='success')
      {
        setArtists(
          result.data.map((artist)=>{
            return({
              ...artist,
              title: `${artist.firstname}`,
            })
          })
        )
      }else{
        alert('error occured while fetching all artists')
      }
     
    })
  }

  const getSongsOfSelectedArtist = (artist)=>{
  //  console.log(artist.id) // weeknd id 4
    axios.get(url +'/artist/songs/' + artist.id).then((response)=>{
      const result = response.data
      if(result.status ==='success')
      {
        history.push('/songlist',{song: result.data, title : artist.title, thumbnail : artist.thumbnail, })
        
      }else{
        alert('error occured while fetching all artists')
      }
     
    })
  }

  const getSongsOfSelectedAlbum = (album)=>{
    console.log(album.id)
    axios.get(url +'/album/songs/' + album.id).then((response)=>{
      const result = response.data
      if(result.status ==='success')
      {
        history.push('/songlist',{song: result.data, title : album.title, thumbnail : album.thumbnail, })
        
      }else{
        alert('error occured while fetching all artists')
      }
     
    })
  }
    return ( <div  >
    <h2 className="page-title">Home </h2>
   <HorizontalSlider onItemSelect={getSongsOfSelectedArtist} item = {artists} title = "Featured Artist"/>
   <HorizontalSlider onItemSelect={getSongsOfSelectedAlbum} item = {albums} title = "Featured Albums"/>

    </div>)
}
  
  export default Home