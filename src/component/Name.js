import React from 'react'

const Name = (props)=>
{
    console.log(props)
    return<h2> Hello {props.name} likes {props.movie} </h2>
}
export default Name;