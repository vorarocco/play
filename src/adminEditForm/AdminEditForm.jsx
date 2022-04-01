import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import './adminEditForm.scss'

const AdminEditForm = ({movie,setMovie}) => {

    
  let [editForm , setEditForm] = useState({movie})
  const navigate = useNavigate()

  console.log(editForm)

  let handleSubmit = async (e) =>{
    e.preventDefault()

    try{
    let res = await fetch(`${process.env.REACT_APP_backendURI}movies/${movie._id}`, {
        method:'PUT',
        body: JSON.stringify({
            title: editForm.title,
            description: editForm.description,
            img: editForm.img,
            imgTitle: editForm.imgTitle,
            imgSmall: editForm.imgSmall,
            trailer: editForm.trailer,
            video: editForm.video,
            year: editForm.year,
            limit: editForm.limit,
            genre: editForm.genre,
            isSeries: false

        }),
        headers:{
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI4ZjdiMmIzZjQ2MDg0MDExMWFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODUzMzEzNSwiZXhwIjoxNjQ5MTM3OTM1fQ.hsic2ISw4nzf59oKzG-O524jdpS3Ah559gAwirBO9Lo",
            "Content-Type": "application/json"
        }
    })
    navigate('/admin')
    setMovie(res.data)
        }catch(err){
            console.log(err)
        }
    }
    let handleChange = (e) =>{
        setEditForm({
                ...editForm,[e.target.id]: e.target.value
            })
        }
    return (
    <div>
        <h1>Edit Movie</h1>
        <form onSubmit={handleSubmit}>
                <ul>
                <li>
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id='title' 
                        name='title' 
                        onChange ={handleChange} 
                        defaultValue={movie.title} 
                        placeholder='title'/>
                </li>
                <li>
                    <label htmlFor="description">description:</label>
                    <textarea 
                        type="text" 
                        id='description' 
                        name='description' 
                        onChange ={handleChange} 
                        defaultValue={movie.description} 
                        placeholder='description'>    
                    </textarea>
                </li>
                <li>
                    <label htmlFor="img">Img:</label>
                    <input 
                        type="text" 
                        id='img' 
                        name='img' 
                        onChange ={handleChange} 
                        defaultValue={movie.img} 
                        placeholder='img'/>
                </li>
                <li>
                    <label htmlFor="imgTitle">ImgTitle:</label>
                    <input 
                        type="text" 
                        id='imgTitle' 
                        name='imgTitle' 
                        onChange ={handleChange} 
                        defaultValue={movie.imgTitle} 
                        placeholder='imgTitle'/>
                </li>
                <li>
                    <label htmlFor="imgSmall">ImgSmall:</label>
                    <input 
                        type="text" 
                        id='imgSmall' 
                        name='imgSmall' 
                        onChange ={handleChange} 
                        defaultValue={movie.imgSmall} 
                        placeholder='imgSmall'/>
                </li>
                <li>
                    <label htmlFor="trailer">trailer:</label>
                    <input 
                        type="text" 
                        id='trailer' 
                        name='trailer' 
                        onChange ={handleChange} 
                        defaultValue={movie.trailer} 
                        placeholder='trailer'/>
                </li>
                <li>
                    <label htmlFor="video">video:</label>
                    <input 
                        type="text" 
                        id='video' 
                        name='video' 
                        onChange ={handleChange} 
                        defaultValue={movie.video} 
                        placeholder='video'/>
                </li>
                <li>
                    <label htmlFor="year">year:</label>
                    <input 
                        type="text" 
                        id='year' 
                        name='year' 
                        onChange ={handleChange} 
                        defaultValue={movie.year} 
                        placeholder='year'/>
                </li>
                <li>
                    <label htmlFor="limit">limit:</label>
                    <input 
                        type="text" 
                        id='limit' 
                        name='limit' 
                        onChange ={handleChange} 
                        defaultValue={movie.limit} 
                        placeholder='limit'/>
                </li>
                <li>
                    <label htmlFor="genre">genre:</label>
                    <input 
                        type="text" 
                        id='genre' 
                        name='genre' 
                        onChange ={handleChange} 
                        defaultValue={movie.genre} 
                        placeholder='genre'/>
                </li>
                <li>
                    <label htmlFor="img">Img:</label>
                    <input 
                        type="text" 
                        id='img' 
                        name='img' 
                        onChange ={handleChange} 
                        defaultValue={movie.img} 
                        placeholder='img'/>
                </li>
                <li>
                    <label htmlFor="isSeries">Check for Series:</label>
                    <input 
                        type="checkbox" 
                        id='isSeries' 
                        name='isSeries' 
                        onChange ={handleChange} 
                        defaultValue={true} 
                        placeholder='isSeries'/>
                </li>
                </ul>
                

            <input type="submit" value='Edit movie' />
        </form>
    </div>

  )
}

export default AdminEditForm