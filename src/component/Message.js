
import React,{Component} from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : 'Welcome to site'
        }
    }
    updateMessage(){
        this.setState({
            message : 'thank you for subscribe'
        })
    }
render()
{
    return(
        <div>
            <h1> {this.state.message}</h1>
            <button onClick={()=>this.updateMessage()}>subscribe</button>
        </div>
    )
}
}
export default Message;