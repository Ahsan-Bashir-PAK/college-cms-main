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
       
        const [datas, setData] = useState([])

        useEffect(()=>{
                // setIsClient(true)
                getData()
        },[])
   
 async function getData () { console.log(`http://localhost:5000/users/getuser?id=${cnic}`);

              await  axios.get(`http://localhost:5000/users/getuser?id=${cnic}`).then(
                         
                        response=>{
                                if (response) { 
                                        // console.log(response.data[0])
                                        setData(response.data[0]) 
                                // console.log(response.data)
                                }
                                 else { alert("not working") }
                        }
        
                ).catch((error)=>{
                        console.log(error)
                })
        
        }

        function approve () {
                if(confirm("Confirm profile")) {
                        window.history.back()         
                } else {
                        return false
                }
                
        }

        const d = new Date()
        console.log(d.toISOString().split('T')[0]);                      


return (
                <div className='bg-slate-100  border w-10/12 h-4/5 m-auto p-2 items-center'>
                        <div className="flex flex-row justify-center w-full p-4 gap-2 bg-blue-900 rounded-md
                        bg-gradient-to-br from-blue-700 to-blue-950 hover:bg-gradient-to-tl
                        ">

                                <div className=' text-white rounded-md text-lg text-center font-bold'> 
                                Profile of Trainee:   {datas.tName}
                                </div>
                        </div>
                        { datas && 
                               
                        <div  className='w-full h-full  bg-slate-100 p-4  flex float-left' >
                                
                                <table className='w-full  p-2' >
                                        <tbody>
                                                <tr>
                                                        <td colSpan={4} className='border border-black p-2 bg-gray-600 text-white'>1.  Personal Information</td>
                                                </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Name of Trainee</td>
                                                <td className='border p-2 border-black w-80'>{datas.tName}</td>
                                                <td className='border p-2 border-black w-60'>Father's Name</td>
                                                <td className='border p-2 border-black w-80'>{datas.tFName}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'> CNIC</td>
                                                <td className='border p-2 border-black w-80'>{datas.tCnic}</td>
                                                <td className='border p-2 border-black w-60'>Date of Birth</td>
                                                <td className='border p-2 border-black w-80'>{datas.tDob}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Qualification</td>
                                                <td className='border p-2 border-black w-80'>{datas.tQualification}</td>
                                                <td className='border p-2 border-black w-60'>Domicile</td>
                                                <td className='border p-2 border-black w-80'>{datas.tDomicile}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Institute</td>
                                                <td className='border p-2 border-black w-80'></td>
                                                <td className='border p-2 border-black w-60'>Degree Name</td>
                                                <td className='border p-2 border-black w-80'></td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Marital Status</td>
                                                <td className='border p-2 border-black w-80'></td>
                                                <td className='border p-2 border-black w-60'>Email Address</td>
                                                <td className='border p-2 border-black w-80'></td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Permanent Address</td>
                                                <td className='border p-2 border-black w-80'>{datas.tPA}</td>
                                                <td className='border p-2 border-black w-60'>Postal Address</td>
                                                <td className='border p-2 border-black w-80'>{datas.tCA}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Emergency Contact No.</td>
                                                <td className='border p-2 border-black w-80'>{datas.tEmgcontact}</td>
                                                <td className='border p-2 border-black w-60'>Relation with Emergency Contact Person</td>
                                                <td className='border p-2 border-black w-80'>{datas.tRelation}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Blood Group</td>
                                                <td className='border p-2 border-black w-80'>{datas.tBg}</td>
                                                <td className='border p-2 border-black w-60'>Religion</td>
                                                <td className='border p-2 border-black w-80'>{datas.tReligion}</td>
                                        </tr>
                                       <tr  className='border border-black p-2'>
                                                <td  className='border p-2 border-black w-60'>Personal Contact No.</td>
                                                <td className='border p-2 border-black w-60'>
                                                0300-8523612
                                                </td>
                                                <td colSpan={2} className='border p-2 border-black w-80'></td>
                                                
                                        </tr>
                                        <tr>
                                                        <td colSpan={4} className='border border-black p-2 bg-gray-600 text-white'>2.   Service Information</td>
                                                </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Rank</td>
                                                <td className='border p-2 border-black w-80'>{datas.tRank}</td>
                                                <td className='border p-2 border-black w-60'>Course</td>
                                                <td className='border p-2 border-black w-80'>{datas.tCourse}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Date of Joining Govt. Service</td>
                                                <td className='border p-2 border-black w-80'>{datas.tJoinService}</td>
                                                <td className='border p-2 border-black w-60'>Date of Joining NHMP</td>
                                                <td className='border p-2 border-black w-80'>{datas.tJoinNHMP}</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Status</td>
                                                <td className='border p-2 border-black w-80'></td>
                                                <td className='border p-2 border-black w-60'>Department</td>
                                                <td className='border p-2 border-black w-80'></td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Driving License No.</td>
                                                <td className='border p-2 border-black w-80'>0000SKP-NHMP</td>
                                                <td className='border p-2 border-black w-60'>Driving License issuing Authority</td>
                                                <td className='border p-2 border-black w-80'>NHMP</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Driving License Category</td>
                                                <td className='border p-2 border-black w-80'>LTV</td>
                                                <td className='border p-2 border-black w-60'>Driving License Expiry Date</td>
                                                <td className='border p-2 border-black w-80'>11-05-2028</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Posting Zone</td>
                                                <td className='border p-2 border-black w-80'>Motorway Central-I</td>
                                                <td className='border p-2 border-black w-60'>Date of Arrival in College</td>
                                                <td className='border p-2 border-black w-80'>05-05-2024 (Sunday)</td>
                                        </tr>
                                        <tr  className='border border-black p-2'>
                                                <td className='border p-2 border-black w-60'>Previous Professional Experience (if any)</td>
                                                <td className='border p-2 border-black w-80'>{datas.tExp}</td>
                                                <td className='border p-2 border-black w-60'>Previous Courses (if any)</td>
                                                <td className='border p-2 border-black w-80'></td>
                                        </tr>
                                      
                                        </tbody>
                                </table>
                                
                        </div>
                               }
                        <div className='w-full p-2 flex flex-row'>
                                <div className='w-8/12 p-2 text-red-800 italic font-semibold'>
                                        *Note: Training Branch shall approve request after due verification within 72 hours after Registeration.
                                </div>
                                <div className='w-4/12  p-2 gap-4 flex flex-row justify-end items-end'>
                                <input type="button" value="Reject"  className='p-2 bg-red-800 text-white rounded-sm w-40 cursor-pointer hover:bg-gradient-to-br hover:from-red-700 hover:to-red-400' />

                                <input type="button" value="Approve" className='p-2 bg-green-800 text-white rounded-sm w-40 cursor-pointer hover:bg-gradient-to-br hover:from-green-700 hover:to-green-400'  onClick={approve}/>
                                        
                        </div>
                                       
                        </div>

                       
                                

                </div>
               
        )
}
export default ViewProfile