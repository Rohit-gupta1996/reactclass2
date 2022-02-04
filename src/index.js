import React from 'react'
import ReactDom from 'react-dom'

import SingleComment from './SingleComment';
import './index.css';

const App = () =>{
    return(
        <div className ="ul comments">
        <SingleComment
        image='https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UY327_FMwebp_QL65_.jpg'
        name='Rohit'
        time='At 8:00AM'
        text='Its good to see you'
        />
 
        <SingleComment
        image='https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY327_FMwebp_QL65_.jpg'
        name='Dev'
        time='At 9:00AM'
        text='Hey Nice to see you'
        />
        
        <SingleComment
        image='https://images-na.ssl-images-amazon.com/images/I/41IXK1j+aFL._SY344_BO1,204,203,200_.jpg'
        name='Himanshu'
        time='At 10:00AM'
        text='Hey !Good morning'
        />
        </div>
        
    )
}
ReactDom.render(
    <App/>,
    
    document.querySelector('#root')
)