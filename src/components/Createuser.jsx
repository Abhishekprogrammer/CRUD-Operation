import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./homecrud.module.css"
const Createuser = () => {
    let [name, setName]= useState("")
    let [salary, setSalary]= useState("")
    let [company, setCompany]= useState("")

    let navigate = useNavigate()
    let fromHandling=(e)=>{
        e.preventDefault()
        let payLoad ={name, salary, company}

        axios.post("http://localhost:3000/content" , payLoad)
        .then(()=>{
            console.log("data has been added")
        })
        .catch(()=>{
            console.log("something went wrong")
        })
        window.location.reload();
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
                <th colSpan="2"><button id={style.btn} onClick={fromHandling}>Submit</button></th>
            </tr>
        </table>
        </form>
    </section>
  )
}

export default Createuser
