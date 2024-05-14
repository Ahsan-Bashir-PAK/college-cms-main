'use client'

import React, {useEffect, useState} from 'react'

import { MdOutlineDeleteForever } from "react-icons/md"
import axios from 'axios'
import Link from "next/link"
const AccountVerf = ()=>{

        useEffect(()=>{
       
                axios.get('http://116.0.45.14:5000/signUp/accountReq').then(
                        response=>{
                                if (response) { 
                                        setData(response.data) 
                                
                                }
                                 else { alert("not working") }
                        }
        
                ).catch((error)=>{
                        console.log(error)
                })
        },[])
   
 
                
const [data, setData] = useState([])
// const [count, setCount] = useState(1)
var counter = 1;

return (
                <div className='bg-slate-100  border w-10/12 h-4/5 m-auto p-2 items-center'>
                        <div className="flex flex-row justify-center w-full p-4 gap-2 bg-gray-100">

                                <h1 className=' text-blue-950 rounded-md text-lg text-center font-bold'> List of Trainee Registered Through Android Application
                                </h1>
                        </div>

                        <div className='flex flex-row w-full '>
                        
                        <div className='flex flex-row w-full text-white bg-blue-400  '>
                        
                        <div className='p-1 ml-1 w-8 '>Sr.</div>
                        <div className='p-1 ml-1 w-2/12 '>Trainee Name</div>
                        <div className='p-1 ml-1 w-2/12 '>Father Name</div>
                        <div className='p-1 w-2/12 '>CNIC.</div>
                        <div className='p-1 ml-4  w-2/12 '>Course.</div>
                        <div className='p-1 ml-2 w-2/12 '>Domicile</div>
                        <div className='p-1 ml-2 w-1/12 '>Action</div>
                       

                    </div>        



                        </div>
                        <div>
                        {data && 
                                data.map((item, index)=>(
                                        <div className={`${item.tCourse == '39th Upper Class'? "bg bg-red-100": "bg-slate-200"} p-1 w-full border-b border-blue-400  flex flex-row `}>
                                        
                                        <div className='p-1 ml-1 w-8 '>{`${counter++}`}</div>
                                        <div className='p-1 ml-1 w-2/12 '>{item.tName} </div>
                                        <div className='p-1 ml-1 w-2/12 '>{item.tFName}</div>
                                        <div className='p-1    w-2/12 '>{item.tCnic}</div>
                                        <div className=" p-1 ml-1 w-2/12 ">{item.tCourse}</div>
                                        <div className='p-1 ml-1 w-2/12 flex flex-wrap text-wrap '>{item.tDomicile}</div>
                                        <div className='p-1 ml-2 w-1/12 flex rounded-md items-center justify-center
                                        flex-row bg-green-500 '>
                                                <span className='text-white  hover:cursor-pointer  p-1'>
                                                      <Link
                                                      href={`/trainee/viewProfile?cn=${item.tCnic}`}
                                                        // href={{
                                                        //         pathname: '/trainee/viewProfile',
                                                        //         query: { name: 'dfs'},
                                                        //       }}
                                                      >View</Link>   </span>
                                                
                                        </div>
                                        </div>

                                ))}

                </div>
                </div>
        )
}
export default AccountVerf