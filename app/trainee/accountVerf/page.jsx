'use client'

import React, {useEffect, useState} from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import axios from 'axios'

const AccountVerf = ()=>{

        useEffect(()=>{
       
                axios.get('http://116.0.45.14:5000/signUp/accountReq').then(
                        response=>{
                                if (response) { console.log(response.data)
                                        setData(response.data) 
                                console.log(response.data)
                                }
                                 else { alert("not working") }
                        }
        
                ).catch((error)=>{
                        console.log(error)
                })
        },[])
   
 
                
const [data, setData] = useState([])


return (
                <div className='bg-slate-200  border w-10/12 h-4/5 m-auto p-2 items-center'>
                        <div className="flex flex-row justify-center w-full p-4 gap-2 bg-gray-300">

                                <h1 className=' text-black  rounded-md text-lg text-center font-bold'> List of Trainee Registered Through Android Application
                                </h1>
                        </div>

                        <div className='flex flex-row w-full '>
                                <table className='w-full justify-center items-center text-center'>
                                        <tr className=' bg-blue-950 p-2 text-white '>
                                                <td className='w-2/12 '>Trainee Name</td>
                                                <td className='w-2/12 '>Father Name</td>
                                                <td className='w-3/12 '>Course</td>
                                                <td className='w-2/12 '>CNIC #</td>
                                                <td className='w-2/12 '>Domicile</td>
                                                <td className='w-1/12 '>Action Taken</td>
                                        </tr>


                                </table>



                        </div>
                        <div>
                                {data &&
                                        data.map((item, index) => (
                                                
                        <tr className='p-1 border-b border-blue-950 flex '>
                                <td className='w-2/12 border '>{item.tName} </td>
                                <td className='w-2/12  '>{item.tFName}</td>
                                <td className='w-3/12 '>{item.tCourse}</td>
                                <td className='w-2/12 '>{item.tCnic}</td>
                                <td className='w-2/12 '>{item.tDomicile}</td>
                                <td className='w-1/12 items-center  justify-center gap-5 flex flex-row'><FaCheckCircle color='green' /><MdEdit /></td>
                                </tr>
                    
                                        ))}

                        </div>


                </div>
        )
}
export default AccountVerf