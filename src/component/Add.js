import React,{Component} from 'react'
class Add extends Component{
    constructor(){
        super()
        this.state = {a:12, b:3};
        
    }
    updateMessage(){
        this.setState({
           sum: this.state.a+this.state.b
        })
    }
   render(){
     return( 
     <div>
       <h1>addition of number {this.state.a} and {this.state.b} is :{this.state.a+this.state.b}</h1>;
       <h1>subtraction of number {this.state.a} and {this.state.b} is :{this.state.a-this.state.b}</h1>;
       <h1>multiplication of number {this.state.a} and {this.state.b} is :{this.state.a*this.state.b}</h1>;
       <h1>division of number {this.state.a} and {this.state.b} is :{this.state.a/this.state.b}</h1>
       <button onClick={()=>this.updateMessage()}>add</button>
       
       </div>);
   }
  }
  export default Add;