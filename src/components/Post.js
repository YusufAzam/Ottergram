import { Barry } from "../otters"
import React from "react"

function Post(props){

    return(
        <li className='post-component'>
            <button onClick={()=> props.setSelectedPostName(props.name)}>
            <img src={props.image} alt={props.name}/>
            <p className="post-name">{props.name}</p>
            </button>
      </li>
    )
}

export default Post