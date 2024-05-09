'use client'
import axios from "axios"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

  

export default function Home() {

   useEffect(()=>{
       
      axios.get('http://localhost:5000/reports/get').then(
              response=>{
                      if (response) { 
                              setData(response.data) 
                           console.log(response.data)
                      
                      }
                       else { alert("not working") }
              }

      ).catch((error)=>{
              console.log(error)
      })
},[])


const [data, setData] = useState("")

  return (
    <div>
          <div className='border w-full h-screen'> {/* bg screen */}
              <div className='border  w-full h-full m-auto flex flex-row  p-2'>
                 
                {/* Header Area */}
                 <div className='w-full h-full'>
                    
                    {/* Total Previous Recrods Tab */}
                    { 
                    data && data.map((item, index) => (
                       
                       
                       <div className='  justify-center items-center   w-full  flex flex-row mb-2  '>
                        <div className="  flex justify-center items-center  text-black p-2 flex-col  m-2  w-4/12 rounded-lg shadow-md shadow-black cursor-pointer hover:bg-slate-200 hover:shadow-none">
                          <h4 className="text-blue-950">Total Pass Out Trainees </h4>
                          <h6 className="font-bold text-black">
                          </h6>
                          </div>

                          <div className="  bg-[#fccd41] flex justify-center items-center align-middle  text-black  flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none ">
                          <h4 className="text-sm"> Advance Class Course </h4>
                          <h5 className="font-bold">{item.tCourse == 'Advance Class Course' ? item.Total : '0'}</h5>
                          </div>

                          <div className="bg-[#ff000c] text-white flex justify-center items-center align-middle  p-1 flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none">
                          <h1>Upper Class Course </h1>
                          <h5 className="font-bold">{item.tCourse == 'Upper Class Course' ? item.Total : '0'}</h5>
                          </div>

                          <div className="  flex justify-center items-center align-middle  text-black p-1 flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none">
                          <h1>Intermediate Class Course  </h1>
                          <h5 className="font-bold">{item.tCourse == 'Intermediate Class Course' ? item.Total : '0'}</h5>
                          </div>

                          <div className="  flex justify-center items-center align-middle  text-black p-1 flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none">
                          <h1>Lower Class Course  </h1>
                          <h5 className="font-bold">{item.tCourse == 'Lower Class Course' ? item.Total : '0'}</h5>
                          </div>
                         
                           
                          <div className="  flex justify-center items-center align-middle  text-white p-1 flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer bg-green-700 hover:shadow-none  ">
                          <h1>Probationer  Course </h1>
                          <h5 className="font-bold">{item.tCourse == 'Probationer Course' ? item.Total : '0'}</h5>
                          </div>

                          <div className="  flex justify-center items-center align-middle   p-1 flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none bg-yellow-400 text-black ">
                          <h1>Orientation Course   </h1>
                          <h5 className="font-bold">0</h5>
                          </div>
                        

                          <div className="  flex justify-center items-center align-middle  text-white p-1 flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none bg-black ">
                          <h1>Recruit Course  </h1>
                          <h5 className="font-bold">0</h5>
                          </div>

                          
                         
                    </div> 
                     
                     ))}

                    <div className=' rounded-md justify-center items-center  bg-slate-300 w-full  flex flex-row mb-1 h-8 text-black'>
                        <h1>Present Undergoing Courses</h1>

                    </div>

                    {/* Container Area */}
                    <div className=' w-full h-full  border  bg-blue-200 p-6 flex'>
                      

                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black mt-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-orange-600 p-1 text-white text-center'>Advance Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                        
                            </div>
                        </div>
                        
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-red-600 p-1 text-white text-center'>Upper Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>

                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-green-600 p-1 text-white text-center'>Probationer Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>
                      
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-black p-1 text-white text-center'>Recruite Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                             
                            </div>
                        </div>
                        {/* End Container Area */}
                    </div>
                 </div>        
              </div>     
          </div>

    </div>

  )
}





