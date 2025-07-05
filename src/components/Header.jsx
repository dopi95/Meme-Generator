import React from 'react'
import trollface from '../assets/troll-face.png'

 export default function Header() {
  return (
    <header className='header'>
            <img src={trollface} alt='troll-face image' className='header--image'/>
            <h2 className='header--title'>Header component</h2>
            <h4 className='header--text'>React Course - Project 3</h4>
    </header>
  )
}


