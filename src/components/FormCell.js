import React from 'react';

/*
<form method="post" action={props.action}>
            <div className="field half first">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div className="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
                <li><input type="submit" value="Send Message" className="special" /></li>
                <li><input type="reset" value="Reset" /></li>
            </ul>
        </form>

        <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
*/ 

export default (props) => {
   
 return (
    <article id="contact" key="contact">
        <h2 className="major">Contact</h2>
        
        
        <ul className="icons">
            <li><a href="https://www.linkedin.com/in/emmapereirab" className="icon fa-linkedin"><span className="label">Twitter</span></a></li>
            <li>Linkedin: emmapereirab</li>
            <br></br>
            <br></br>
            <li><a href="https://github.com/emmapereira" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li>Github: emmapereira</li>
            <br></br>
            <br></br>
            <li><a className="icon fa-google"><span className="label">GitHub</span></a></li>
            <li>Email: emmapereira23@gmail.com</li>
        </ul>
    </article>

    )
}