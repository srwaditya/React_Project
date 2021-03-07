import  React, { Component } from 'react';

const Hello = props=> {
    console.log(props)

    return(
    <div> <h1>ijjj {props.name},{props.id}</h1>
    {props.children}
    </div>
    
   
  
    )

}

export default Hello