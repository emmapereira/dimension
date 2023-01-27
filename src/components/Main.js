import React, { Component } from 'react';
import Cell from './Cell';
import FormCell from './FormCell';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            cells:null
        }
    }

    componentWillMount(){
        if(this.props.children){
            const cells = this.props.children.map((child)=>{
                if(child.props.title.toLowerCase() === "contact"){
                    let props = {
                        action: child.props.action,
                   }
                   return FormCell(props)
                }else{
                    let props = {
                        title: child.props.title, 
                        subtitle: child.props.subtitle,
                        subtitle2: child.props.subtitle2,
                        subtitle3: child.props.subtitle3,
                        subtitle4: child.props.subtitle4,
                        text:child.props.text, 
                        text2:child.props.text2,
                        text3:child.props.text3,
                        text4:child.props.text4,
                        url:child.props.url,
                        url2:child.props.url2,
                        url3:child.props.url3,
                        url4:child.props.url4,
                        img:child.props.img,
                        alt:child.props.alt,
                        img2:child.props.img2,
                        alt2:child.props.alt2,
                        img3:child.props.img3,
                        alt3:child.props.alt3,
                        img4:child.props.img4,
                        alt5:child.props.alt4,
                        key: child.props.id
                   }
                   return Cell(props)
                }
                
            })

            this.setState({
                cells:cells
            })
        }
    }

    render(){
        return(
            <div id="main">
                {this.state.cells}
            </div>
        )
    }
}