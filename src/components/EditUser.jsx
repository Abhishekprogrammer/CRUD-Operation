import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./homecrud.module.css"

const EditUser = () => {
    let [name, setName]= useState("")
    let [salary, setSalary]= useState("")
    let [company, setCompany]= useState("")

    let {index}= useParams()
    let navigate = useNavigate()
    console.log(index)

    useEffect(()=>{
      axios.get(`http://localhost:3000/content/${index}`)
      .then((response)=>{
           setName(response.data.name)
           setSalary(response.data.salary)
           setCompany(response.data.company)
      })
    },[index])

    
    let formHandle=(e)=>{
      e.preventDefault()
      let payLoad={name,salary,company}
      axios.put(`http://localhost:3000/content/${index}`, payLoad)
      .then(()=>{
        console.log("data has been updated")

      })
      navigate("/users")
    }
  return (
    <section id={style.mainForm}>
        <form action="">
        <table>
            <tr>
                <th colSpan="2"><h1>Employee Details</h1></th>
            </tr>
            <tr>
                <td><label htmlFor="">Name :</label></td>
                <td><input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
            </tr>
            <tr>
                <td><label htmlFor="">Salary :</label></td>
                <td><input type="tel" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/></td>
            </tr>
            <tr>
                <td><label htmlFor="">Company :</label></td>
                <td><input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}}/></td>
            </tr>
            <tr>
                <th colSpan="2"><button id={style.btn} onClick={formHandle}>Update</button></th>
            </tr>
        </table>
        </form>
    </section>
  )
}

export default EditUser
