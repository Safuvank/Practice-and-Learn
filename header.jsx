import React from 'react'
import './header.css'; 
import { useSelector } from 'react-redux';

const Header = ({count}) => {
    const color = useSelector(item => item.color.value)
  return (
    <div className='header'>
        <h1 style={{color}}>This is the header section of this project</h1>
        <h3>Current values is </h3>
    </div>
  )
}

export default Header