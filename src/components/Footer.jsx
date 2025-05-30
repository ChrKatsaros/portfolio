import React from 'react'

function Footer() {
  const date= new Date().getFullYear()
  return (
    <footer>&copy; {date} Chris Katsaros</footer>
  )
}

export default Footer