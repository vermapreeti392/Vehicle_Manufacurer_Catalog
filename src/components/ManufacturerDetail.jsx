import React, { useEffect, useState } from 'react'
import './Vehicle.css'
export default function ManufacturerDetail({setBlur}) {
    const [data, setData] = useState('');
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('item')));
    },[])
    // 
    // console.log(data);
   const handleBlur = ()=>{
    setBlur(false)
    localStorage.removeItem('item');
   }
    return (
        <div className='m-main'>
            <div className="m-container">
                <h1 onClick={()=>{handleBlur()}} className= "m-h1">*</h1>
                <p>{data.Mfr_Name}</p>
                <p>{data.Country}</p>
                <p>{data.Mfr_CommonName}</p>
                
            </div>
        </div>
    )
}
