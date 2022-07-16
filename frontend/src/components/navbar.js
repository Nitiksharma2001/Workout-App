import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
const navbar = () => {
  return (
	<header >
		<Link to = "/" className="navbar">
			<h1>Welcome</h1>
		</Link>
	</header>
  )
}

export default navbar