import React, {Component} from 'react'
class State extends Component{
constructor(props){
    super(props)
        this.state= {
            volume:70,
            status: 'pause'
        }
    }
render(){
    return(
    <div>
        <h1>'volume :',{this.props.volume}</h1>
        <h1>'Status :',{this.props.status}</h1>
    </div>);
}
}
export default State;