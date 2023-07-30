import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Effect1(){
    const [num,setNum]=useState(0);

    useEffect(()=>{
        document.title=`You clicked me ${num} times.`
    })
    return (
        <>
            <button onClick={()=>{
                setNum(num+1);
            }}>Click Me {num}</button>
        </>
    )
}