import React, { Component } from 'react';
import {Header, Main, Article} from './components'

class App extends Component {
  render() {
    return (
      
			<div id="wrapper">

			
					<Header/>
					<Main>
						<Article
							id="intro" title="About me" img="/images/studies.png" alt="some image01" 
							text="Hej! My name is Emma, and I am a software engineer based in Copenhagen. 
								I graduated last summer from my bachelor's degree in computer science and engineering at the Polythecnic University of Catalonia, 
								where I specialized in Software Engineering."
							text2="I am currently doing my master's in Human-Centered Artificial Intelligence at the Technical University of Denmark, where I am focusing on User Experience and Cognitive Science.
								Outside of the Internet world, I love being outdoors, traveling, and taking pictures or videos, specially of the sunrise. ☺ "
							/>

						<Article 
							id="work" title="Work" img="/images/work.png" alt="some image02" 
							subtitle="Student Software Developer at Venzo"
							text="Full-stack developer working on developing a system for an external company to manage their data, using Next.js, Typescript and C#."
							subtitle2="DevOps intern at Danfoss Drives"
							text2="Software developer at the DevOps team at Danfoss Drives working with Agile methodologies and website development using mainly the ASP.NET framework, as well as JavaScript, html and css. 
								Conducted my bachelor's thesis during this time."
							subtitle3="Web intern at inLab FIB"
							text3="Web development team at the research institute of the Informatics Faculty of Barcelona, used Drupal, php, html and css to modify and update the company's websites."
							/>
						<Article 
							id="about" title="Projects" 
							img="/images/1.png" alt="Good Near You idea" 
							subtitle="Good Near You"
							text="Web app to find sustainable clothing stores near the user's location or anywhere in the world. 
								Developed with the Next.js framework, using JavaScript, html and css."
							url="https://goodnearyou.vercel.app"
							img2="/images/offhome.png" alt2="OFF-HOME" 
							subtitle2="OFF-HOME"
							text2="Designed and implemented an android app to organise outdoor activities and connect with other people participating on them. 
								Worked on the front-end team, using Android Studio with Kotlin as the main language."
							url2="https://github.com/OFF-Home"
							img3="/images/ecs.png" alt3="ECS report" 
							subtitle3="Text formatting and memory recall"
							text3="Experiment in cognitive science conducted at the Technical Univeristy of Denmark about the influence of text formatting on memory recall. 
								Used Python to analyse the data and several analytical methods."
							url3="https://github.com/emmapereira/experimentCS"
							img4="/images/greentrail.png" alt4="GreenTrail" 
							subtitle4="GreenTrail"
							text4="Project for a course in UX Design Prototyping where we designed, prototyped and tested an idea for a mobile application 
								that would allow users to plan their trips in a more ecofriendly way. Designed using Figma."
							url4="shorturl.at/bgknP"
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
