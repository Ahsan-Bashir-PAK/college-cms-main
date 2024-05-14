'use client'
import axios from "axios"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import {
   ComposedChart,
   Line,
   Area,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
 } from 'recharts';
 

export default function Home() {
// 
const databar = [
   {
     name: 'Upper Class Course',
     'Number of Trainees': 52,
     'Courses': 60,
     amt: 1400,
   },
   {
     name: 'Probationer Course',
     'Number of Trainees': 43,
     'Courses': 60,
     amt: 1506,
   },
   {
     name: 'Intermediate Class Course',
     'Number of Trainees': 42,
     'Courses': 60,
     amt: 989,
   },
   
 ];

//  Pie charts
   const COLORS = ['#FF0000', '#0000FF', '#008000', '#FF8042'];
   const data = [
      { name: 'Group A', value: 930 },
      { name: 'Group B', value: 760  },
      { name: 'Group C', value: 760  },
    ];
   

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };


   useEffect(()=>{
       
      axios.get('http://116.0.45.14:5000/reports/get').then(
              response=>{
                      if (response) { 
                              // setData(response.data) 
                              setProbationer(response.data[0].total)
                              setInter(response.data[1].total)
                              setUpper(response.data[2].total)
                           // console.log(response.data)
                          const  sum = response.data[0].total + response.data[1].total + response.data[2].total;
                           setTotal(sum)
                      }
                       else { alert("not working") }
              }

      ).catch((error)=>{
              console.log(error)
      })
},[])


const [total, setTotal] = useState(0);

const [advance, setAdvance] = useState("")
const [upper, setUpper] = useState("")
const [inter, setInter] = useState("")

const [Probationer, setProbationer] = useState("")


  return (
    <div>
          <div className='border w-full h-screen'> {/* bg screen */}
              <div className='border  w-full h-full m-auto flex flex-row  p-2'>
                 
                {/* Header Area */}
                 <div className='w-full h-full'>
                    
                    {/* Total Previous Recrods Tab
                    { 
                    data && data.map((item, index) => ( */}
                       
                       
                       <div className='justify-center items-center   w-full  flex flex-row mb-2  '>
                       
                        <div className=" flex justify-center items-center  text-black p-2 flex-col  m-2  w-3/12 rounded-lg shadow-md shadow-black cursor-pointer hover:bg-slate-200 hover:shadow-none">
                          <h4 className="text-blue-950">Total Present Trainees </h4>
                          <h6 className="font-bold text-black">{total}</h6>
                          </div>

                          {/* <div className="  bg-[#fccd41] flex-1 justify-center items-center align-middle  text-black  flex-col  m-2 p-1 w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none ">
                          <h4 className="text-sm "> Advance Class Course </h4>
                          <h5 className="font-bold">{advance? advance:'0'}</h5>
                          </div> */}

                          <div className="bg-[#ff000c] text-white flex justify-center items-center align-middle  p-1 flex-col  m-2  w-3/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none">
                          <h1> 39th Upper Class Course </h1>
                          <h5 className="font-bold">{upper}</h5>
                          </div>

                          <div className="  bg-blue-800 flex justify-center items-center align-middle  text-white p-1 flex-col  m-2  w-3/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none">
                          <h1>34th Intermediate Class Course  </h1>
                          <h5 className="font-bold">{inter}</h5>
                          </div>

                          {/* <div className="  flex justify-center items-center align-middle  text-black p-1 flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none">
                          <h1>Lower Class Course  </h1>
                          <h5 className="font-bold"></h5>
                          </div> */}
                         
                           
                          <div className="  flex justify-center items-center align-middle  text-white p-1 flex-col  m-2  w-3/12 rounded-lg shadow-md shadow-black cursor-pointer bg-green-700 hover:shadow-none  ">
                          <h1>15th Probationer  Course </h1>
                          <h5 className="font-bold">{Probationer}</h5>
                          </div>

                          {/* <div className="  flex justify-center items-center align-middle   p-1 flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none bg-yellow-400 text-black ">
                          <h1>Orientation Course   </h1>
                          <h5 className="font-bold">0</h5>
                          </div>
                        

                          <div className="  flex justify-center items-center align-middle  text-white p-1 flex-col  m-2  w-2/12 rounded-lg shadow-md shadow-black cursor-pointer  hover:shadow-none bg-black ">
                          <h1>Recruit Course  </h1>
                          <h5 className="font-bold">0</h5>
                          </div> */}

                          
                         
                    </div> 
                    
                     
                     {/* ))} */}

                    <div className=' rounded-md justify-center items-center  bg-slate-300 w-full  flex flex-row mb-1 h-8 text-black'>
                        <h1>Present Undergoing Courses</h1>

                    </div>

                    {/* Container Area */}
                    <div className=' w-full h-full  border  bg-blue-200 p-6 flex'>
                      

                        <div className='bg-blue-100 w-6/12 h-3/6 flex flex-row border-black mt-1 '>
                          
                          {/* <div className=' w-full bg-slate-200'>
                             <h6 className='bg-orange-600 p-1 text-white text-center'>Advance Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                        
                            </div> */}
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart width={800} height={800}>
                                 <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                 >
                                    {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                 </Pie>
                              </PieChart>
                              </ResponsiveContainer>
                              

                        </div>
                        
                        <div className='bg-blue-100 w-6/12 h-3/6 flex flex-row border-black m-1 '>
                          {/* <div className=' w-full bg-slate-200'>
                             <h6 className='bg-red-600 p-1 text-white text-center'>Upper Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div> */}
                            <ResponsiveContainer width="100%" height="100%">
                              <ComposedChart
                                 width={500}
                                 height={400}
                                 data={databar}
                                 margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                 }}
                              >
                                 <CartesianGrid stroke="#f5f5f5" />
                                 <XAxis dataKey="name" scale="band" />
                                 <YAxis />
                                 <Tooltip />
                                 <Legend />
                                 <Bar dataKey="Number of Trainees" barSize={20} fill="#413ea0" />
                                 {/* <Line type="monotone" dataKey="Courses" stroke="#ff7300" /> */}
                              </ComposedChart>
      </ResponsiveContainer>
                        </div>

                        {/* <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
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
                        </div> */}
                        {/* End Container Area */}
                    </div>
                 </div>        
              </div>     
          </div>

    </div>

  )
}





