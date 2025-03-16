import React from 'react'
import "./../../App.css"
const Navbar = () => {
  return (
    <div className="container">
        <ul>
        <li><a href="/Home">Home</a></li>
            <li><a href="/category">Category</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/videos">Videos</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Navbar