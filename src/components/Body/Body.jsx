import axios from 'axios';
import React, { useState } from 'react'
import Header from '../Headers/header'
const Body = () => 
{

/*axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
.then((res)=>console.log(res))
.catch((error) =>console.error(error));*/


const [name, SetName] = useState("")
console.log("name",name);

  return (
    <div>
     <input placeholder='enter your name'
     
     onChange={(e)=>
     {
        SetName(e.target.value)
     }
     } /> 
    <Header name="name"/>
    </div>
    /*<subBody name=={name}/> هون مررت props*/  
  )
}

export default Body
