Components
===========

	Card.js
	-------

	import React from "react"

	export default function Card() {
   	 return (
      	  <div className="card">
      	      	<img 
		   src="../images/katie-zaferes.png" 
		   className="card--image" 
		   alt = "Image of Katie Zafares"
		/>
       	    	<div className="card--stats">
               		<img 
		  	   src="../images/star.png" 
		  	   className="card--star" 
		  	   alt = "Star icon"
		  	 />
         	       	<span>5.0</span>
            	    	<span className="gray">(6) • </span>
         	      	<span className="gray">USA</span>
            	</div>
            	<h2>Life Lessons with Katie Zaferes</h2>
            	<p><span className="bold">From $136</span> / person</p>
       	  </div>
    	 )
	}

	Hero.js
	-------

	import React from "react"

	export default function Hero() {
   	 return (
      	  <section className="hero">
        	 <img src="../images/photo-grid.png" className="hero--photo" />
           	 <h1 className="hero--header">Online Experiences</h1>
           	 <p className="hero--text">Join unique interactive activities led by 
           	 one-of-a-kind hosts—all without leaving home.</p>
   	  </section>
    	 )
	}

	Navbar.js
	---------
	import React from "react"

	export default function Navbar() {
  	  return (
    	    <nav>
         	   <img src="../images/airbnb-logo.png" className="nav--logo" />
       	    </nav>
    	 )
 	}


images
======
airbnb-logo.png
katie-zaferes.png
photo-grid.png
star.png

App.js
======

import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
            // <Hero />
    return (
        <div>
            <Navbar />
            <Card />
        </div>
    )
}

index.html
==========
<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>

index.js
========
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

styles.css
==========
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
}

nav {
    height: 70px;
    display: flex;
    padding: 20px 36px;
    box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
}

.h2 {
    font-size : 0.75rem;
    font-weight : normal;
.bold {
    font-weight: bold;
}

.gray {
    color: #918E9B;
}

.nav--logo {
    max-width: 100px;
}

section {
    padding: 20px;
}

.hero {
    display: flex;
    flex-direction: column;
}

.hero--photo {
    max-width: 400px;
    align-self: center;
}

.hero--header {
    margin-bottom: 16px;
}

.hero--text {
    margin-top: 0;
}

.card {
    width: 175px;
    font-size: 0.75rem;
}

.card--image {
    width: 100%;
    border-radius: 9px;
}

.card--stats {
    display: flex;
    align-items: center;
}

.card--star {
    height: 14px;
}
