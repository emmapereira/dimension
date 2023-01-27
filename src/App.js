import React, { Component } from 'react';
import {Header, Main, Article} from './components'

class App extends Component {
  render() {
    return (
      
			<div id="wrapper">

			
					<Header/>
					<Main>
						<Article
							id="intro" title="About me" img="/images/pic01.jpg" alt="some image01" 
							text="Hej! My name is Emma, and I am a software engineer based in Copenhagen. 
								I graduated last summer from my bachelor's degree in computer science and engineering at the Polythecnic University of Catalonia, 
								where I specialized in Software Engineering."
							text2="I am currently doing my master's in Human-Centered Artificial Intelligence at the Technical University of Denmark, where I am focusing on User Experience and Cognitive Science.
								Outside of the Internet world, I love being outdoors, traveling, and taking pictures or videos, specially of the sunrise. ☺ "
							/>

						<Article 
							id="work" title="Work" img="/images/pic02.jpg" alt="some image02" 
							text="→ Student Software Developer at Venzo_: full-stack developer working on developing a system using Next.js, Typescript and C#."
							text2="→ DevOps intern at Danfoss Drives: Software developer at the DevOps team at Danfoss Drives working with Agile methodologies and website development using mainly ASP.NET. Conducted my bachelor's thesis during this time."
							text3="→ Web intern inLab FIB, the research institute of the Informatics Faculty of Barcelona: web development team, using Drupal, php, html and css to modify and update the company's websites."
							/>
						<Article 
							id="about" title="Projects" img="/images/pic03.jpg" alt="some image03" 
							text="Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet."
							/>

						<Article 
							id="contact" title="Contact"/>

					</Main>
			
					

				
					<footer id="footer">
						<p className="copyright">Template: <a href="https://html5up.net">HTML5 UP</a>.</p>
						<p className="copyright">&copy; Photo credits: Emma Pereira</p>
					</footer>

			</div>


    );
  }
}

export default App;
