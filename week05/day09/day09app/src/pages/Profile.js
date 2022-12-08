import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Profile() {
    let params = useParams()
  return (
    <div><h3>{params.id}</h3><Navbar/>Profile</div>
  )
}

export default Profile