'use client'

import React, {useEffect, useState} from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import axios from 'axios'
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const ViewProfile = ()=>{

        const searchParams = useSearchParams();
        const cnic = searchParams.get("cn");
        
        const [data, setData] = useState([]);

        useEffect(()=>{
             
                axios.get(`http://localhost:5000/users/getuser?id=${cnic}`).then(
                         
                        response=>{
                                if (response) { console.log(response.data)
                                        setData(response.data) 
                                // console.log(response.data)
                                }
                                 else { alert("not working") }
                        }
        
                ).catch((error)=>{
                        console.log(error)
                })
        },[])
   

return (
                <div className='bg-slate-200  border w-10/12 h-4/5 m-auto p-2 items-center'>
                        <div className="flex flex-row justify-center w-full p-4 gap-2 bg-blue-900 rounded-md
                        bg-gradient-to-br from-blue-700 to-blue-950 hover:bg-gradient-to-tl
                        ">

                                <p className=' text-white rounded-md text-lg text-center font-bold'> 
                                Profile of Trainee: PO Amjad
                                </p>
                        </div>
                        { data && 
                                data.map((item, index)=>(

                        <div className='w-full h-full  bg-slate-100 p-4  flex float-left' >
                                <table className='w-full  p-2' >
                                        <tbody>
                                                <tr>
                                                        <td colSpan={4} className='border border-black p-2 bg-gray-600 text-white'>Personal Information</td>
                                                </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Trainee Name</td>
                                                <td className='border p-2 border-black w-80'>{item.tName}</td>
                                                <td className='border p-2 border-black w-60'>Father Name</td>
                                                <td className='border p-2 border-black w-80'>{item.tFname}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'> CNIC</td>
                                                <td className='border p-2 border-black w-80'>{item.tCnic}</td>
                                                <td className='border p-2 border-black w-60'>Date of Birth</td>
                                                <td className='border p-2 border-black w-80'>{item.tdob}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Qualification</td>
                                                <td className='border p-2 border-black w-80'>{item.tQualification}</td>
                                                <td className='border p-2 border-black w-60'>Domicile</td>
                                                <td className='border p-2 border-black w-80'>{item.tDomicile}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Permanent Address</td>
                                                <td className='border p-2 border-black w-80'>{item.tPA}</td>
                                                <td className='border p-2 border-black w-60'>Postal Address</td>
                                                <td className='border p-2 border-black w-80'>{item.CA}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Emergency Contact#</td>
                                                <td className='border p-2 border-black w-80'>{item.tEmgcontact}</td>
                                                <td className='border p-2 border-black w-60'>Relation with Emergency Contact Person</td>
                                                <td className='border p-2 border-black w-80'>{item.tRelation}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Personal Contact #</td>
                                                <td className='border p-2 border-black w-80'>0300-8523612</td>
                                                <td className='border p-2 border-black w-60'>Religion</td>
                                                <td className='border p-2 border-black w-80'>{item.tReligion}</td>
                                        </tr>
                                       <tr  className='border border-black p-2'>
                                                <td colSpan={2} className='border p-2 border-black w-60'>Personal Contact #</td>
                                                <td colSpan={2} className='border p-2 border-black w-80'>0300-8523612</td>
                                                
                                        </tr>
                                        <tr>
                                                        <td colSpan={4} className='border border-black p-2 bg-gray-600 text-white'>Service Information</td>
                                                </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Rank</td>
                                                <td className='border p-2 border-black w-80'>{item.tRank}</td>
                                                <td className='border p-2 border-black w-60'>Course</td>
                                                <td className='border p-2 border-black w-80'>{item.tCourse}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Date Of Appointment</td>
                                                <td className='border p-2 border-black w-80'>{tJoinService}</td>
                                                <td className='border p-2 border-black w-60'>Date of Joining Govt. Service</td>
                                                <td className='border p-2 border-black w-80'>{tJoinNHMP}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Driving License No.</td>
                                                <td className='border p-2 border-black w-80'>0000SKP-NHMP</td>
                                                <td className='border p-2 border-black w-60'>DL issuing Authority</td>
                                                <td className='border p-2 border-black w-80'>NHMP</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Driving License Category</td>
                                                <td className='border p-2 border-black w-80'>LTV</td>
                                                <td className='border p-2 border-black w-60'>DL Expiry Date</td>
                                                <td className='border p-2 border-black w-80'>11-05-2028</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Posting Zone</td>
                                                <td className='border p-2 border-black w-80'>Motorway Central-I</td>
                                                <td className='border p-2 border-black w-60'>Date of Arrival in College</td>
                                                <td className='border p-2 border-black w-80'>05-05-2024</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Professional Experience</td>
                                                <td className='border p-2 border-black w-80'>{item.tExp}</td>
                                                <td className='border p-2 border-black w-60'>Date of Arrival in College</td>
                                                <td className='border p-2 border-black w-80'>{tArrivalCollege}</td>
                                        </tr>
                                      
                                        </tbody>
                                </table>
                                
                                
                        </div>
                                ))}
                        <div className='w-full p-2 flex flex-row'>
                                <div className='w-8/12 p-2 text-red-800 italic font-semibold'>
                                        *Note: Training Branch shall approve request after due verification
                                </div>
                                <div className='w-4/12  p-2 gap-4 flex flex-row justify-end items-end'>
                                <input type="button" value="Reject"  className='p-2 bg-red-800 text-white rounded-sm w-40 cursor-pointer hover:bg-gradient-to-br hover:from-red-700 hover:to-red-400' />

                                <input type="button" value="Approve" className='p-2 bg-green-800 text-white rounded-sm w-40 cursor-pointer hover:bg-gradient-to-br hover:from-green-700 hover:to-green-400' />
                                        
                        </div>
                                       
                        </div>

                       
                                

                </div>
        )
}
export default ViewProfile