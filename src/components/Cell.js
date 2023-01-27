import React from 'react';

export default (props) => {
   
 return (
        <article key={props.key} id={props.key}>
            <h2 className="major">{props.title}</h2>
            <span className="image main"><img src={props.img} alt={props.alt} /></span>
            <h5>{props.subtitle}</h5>
            <p>{props.text}</p>
            <a href={props.url}>{props.url}</a>
            <span className="image main"><img src={props.img2} alt={props.alt2} /></span>
            <h5>{props.subtitle2}</h5>
            <p>{props.text2}</p>
            <a href={props.url2}>{props.url2}</a>
            <span className="image main"><img src={props.img3} alt={props.alt3} /></span>
            <h5>{props.subtitle3}</h5>
            <p>{props.text3}</p>
            <a href={props.url3}>{props.url3}</a>
            <span className="image main"><img src={props.img4} alt={props.alt4} /></span>
            <h5>{props.subtitle4}</h5>
            <p>{props.text4}</p>
            <a href={props.url4}>{props.url4}</a>
        </article>
    )
}