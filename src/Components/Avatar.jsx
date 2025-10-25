import React from 'react'
import { Link } from 'react-router-dom'
import Clothes from './Clothes'

const Avatar = () => {
  return (
    <div>
    <Link to="/">
        <button class='discover'>Go to home</button>
    </Link>
    <Clothes/>
    </div>
  )
}

export default Avatar