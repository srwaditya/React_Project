
import React from 'react';
//import ReactDOM from 'react-dom';
import Hello from './Component/Hello'
import Massage from './Component/Massage'
// sample component to illustrate props
class App extends React.Component{
    render(){
        return(
 
                <div className="App">
                    {/*accessing information from props */}
                   <Massage></Massage>
                   {/* <h2> name={'Aditya'}</h2>
                    <h3>id={'123'}</h3>
                    <p>This Is children props</p>
                    <button>Action</button>*/}
                    </div>
            );
                  }
}
 
export default App
