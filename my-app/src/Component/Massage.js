
import  React, { Component } from 'react';

class Massage extends React.Component{

    constructor(){
         super()
         this.state={

            massage: 'Welcom Visitor'
         }
    }

    changeMessage(){
        this.setState({
            massage:'Thanku For Subscribe'
        })
    }
    render(){
        return(

            <div><h1>{this.state.massage}</h1>
            <button   onClick = {()=> this.changeMessage()}>Subscribe </button>
            
            </div>
 
      
                    
            )
    }
}
 
export default Massage;