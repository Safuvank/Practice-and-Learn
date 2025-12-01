import React from 'react'
import './Banner.css'

function Banner() {
    const user = {
        name : "safuvan",
        place : "valakkulam",
        phone : "9496862163"
    }
  return (
    <div className='banner'>
        <img src="" alt="" />
        <h1>{user.name}</h1>
        <h2>{JSON.stringify(user)}</h2>
    </div>
  )
}

export default Banner