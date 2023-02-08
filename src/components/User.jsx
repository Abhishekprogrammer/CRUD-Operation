import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./homecrud.module.css"

const User = () => {
 let [data, setData]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/content")
    .then((response)=>{
      console.log(response.data)
      setData(response.data)
    })
  },[])

  let deleteData=(index)=>{
      axios.delete(`http://localhost:3000/content/${index}`)
      window.location.assign("/users")
  }
  return (
    <div id={style.user}>
      {data.map((x)=>{
        return(
          <section id={style.card}>
            <table>
              <tr>
                <th colSpan="2"><h3>Employee {x.id}</h3></th>
              </tr>
              <tr>
                <td>Name</td>
                <td>: {x.name}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>: {x.salary}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>: {x.company}</td>
              </tr>

              <tr>
                <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
              </tr>
              
            </table>
          </section>
         )
      })}
    </div>
  )
}

export default User
