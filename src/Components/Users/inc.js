import React from 'react'
import { useState,useEffect } from 'react'

export default function Inc() {
    const[count,setCount]=useState(0);
    const[context,setContext]=useState("post");
    // const[cost,setCost]=useState();
    useEffect(()=>{
      console.log("Guess")
    },[]);
    function Myfun(){
        let a=Number(count)+1;
        setCount(a);
    }
  return (
    <div>
       <h1>{context}</h1>
        <button onClick={()=>{setContext("comment")}}>comment</button><br></br>
        <button onClick={()=>{setContext("post")}}>post</button><br></br>
        <button onClick={()=>{setContext("like")}}>Like</button><br></br>
        {/* <button onClick={Myfun}>+</button>{count}
        <button onClick={()=>{setCount(count-1)}}>-</button> */}
    </div>
  )
}
