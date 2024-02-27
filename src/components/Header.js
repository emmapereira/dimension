import React from 'react';

export default (props) => {
 //let alt = props.alt || "image avatar";
 return (
	<header id="header">
		<div className="logo">
			<span className="icon fa-solid fa-cat"></span>
		</div>
		<div className="content">
			<div className="inner">
				<h1>Emma Pereira</h1>
				<p>Hi! Welcome to my personal website. <br></br>
					You can find out all about me and my previous work below. <br></br>
					Thank you for visiting!</p>
			</div>
		</div>
		<nav>
			<ul>
				<li><a href="#about">About me</a></li>
				<li><a href="#work">Work</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</header>
    )
}