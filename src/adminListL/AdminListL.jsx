import React, { useState, useEffect } from 'react'
import './adminListL.scss'
import axios from 'axios';


const AdminListL = () => {
    const [lists, setLists] = useState([])

    useEffect(()=>{
        let getLists = async()=>{
          try{
            // console.log(item)
            const res = await axios.get(`${process.env.REACT_APP_backendURI}lists`,{
                headers:{
                  token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI4ZjdiMmIzZjQ2MDg0MDExMWFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODUzMzEzNSwiZXhwIjoxNjQ5MTM3OTM1fQ.hsic2ISw4nzf59oKzG-O524jdpS3Ah559gAwirBO9Lo" 
              }
            })  
            // console.log(res)
            setLists(res.data)
            
          }catch(err){
            console.log(err)
          }
        }
        getLists()
      },[])

  return (
      
    <div className='movieList_container'>
        <div className='styles_item'>
            <h1 className='title'>List</h1>
            <table className='table'>
                <tbody>
                    <tr className='trTitle'>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Genre</th>
                        <th>Action</th>
                    </tr>
                </tbody>
            {lists?.map(list =>{
            return(
                <tbody key={list._id}>
                    <tr className='trTitle'>    
                        <td>{list._id}</td>
                        <td>{list.title}</td>
                        <td>{list.type}</td>
                        <td>{list.genre}</td>
                        <td>
                            <button className='button edit_bt'>Edit</button>
                            <button className='button delete_bt'>Delete</button>
                        </td>
                    </tr>
                </tbody>
                )
            })}
            </table>
        </div>
    </div>
  )
}

export default AdminListL