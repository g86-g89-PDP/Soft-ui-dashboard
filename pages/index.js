import  Dashboard  from "../styles/dashboardW";
import { FaCoins,FaShopify} from "react-icons/fa";
import { IoIosRocket,IoIosColorPalette } from "react-icons/io";
import { AiFillSetting,AiFillHtml5 } from "react-icons/ai";
import { FiCommand } from "react-icons/fi";
import { RiSignalWifi3Fill ,RiMoneyDollarBoxFill} from "react-icons/ri";
import { FcElectroDevices,FcFinePrint } from "react-icons/fc";
import { ImCart } from "react-icons/fc";



import { BsCreditCard,BsArrowUp ,BsArrowRight,BsFillInboxesFill,BsFillPieChartFill,BsBookHalf} from "react-icons/bs";
import { GiProgression,GiRingingBell} from "react-icons/gi";







import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { BarChart, Bar } from 'recharts';




const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const todayMoney=[
  {name:"Today's money",money:"$ 56.300", icon:<FaCoins/>,minus:"+ $50"},
  {name:"Today's money",money:"$ 56.300", icon:<FaCoins/>,minus:"+ $35"},
  {name:"Today's money",money:"$ 56.300", icon:<FaCoins/>,minus:"- $70"},
  {name:"Today's money",money:"$ 56.300", icon:<FaCoins/>,minus:"+ $82.5"}

];

const Soft=[
  {soft:"Soft UI Shopify Version",img:"face22.jpg",img2:"face-3.jpg",budget:"$14.000",completion:"blue",protsent:"60%",icons:<FaShopify/>},
  {soft:"Progress Track",img:"face22.jpg",img2:"face-3.jpg",budget:"$3.000",completion:"blue",protsent:"10%",icons:<GiProgression/>},
  {soft:"Fix Platforms Error",img:"face22.jpg",img2:"face-3.jpg",budget:"Not Set",completion:"green",protsent:"100%",icons:<FiCommand/>},
  {soft:"launch new Mobile App",img:"face22.jpg",img2:"face-3.jpg",budget:"$20.600",completion:"green",protsent:"100%",icons:<RiSignalWifi3Fill/>},
  {soft:"Add the new Landung Page",img:"face22.jpg",img2:"face-3.jpg",budget:"$4.000",completion:"blue",protsent:"25%",icons:<FcElectroDevices/>},
  {soft:"Rdeisgn Online Store",img:"face22.jpg",img2:"face-3.jpg",budget:"$2.000",completion:"red",protsent:"90%",icons:<FcFinePrint/>},

]

const Soft2=[
  {icon:<GiRingingBell/>,redesign:"42.400 -Redesign store",date:"16 June 18.50 PM", color:"blue"},
  {icon:<AiFillHtml5/>,redesign:"New Order #4562135",date:"12 June 18.50 PM", color:"red"},
  {icon:<BsFillInboxesFill/>,redesign:"Company serverd payments",date:"08 May 18.50 PM", color:"blue"},
  {icon:<BsCreditCard/>,redesign:"New card added for order",date:"29 July 18.50 PM", color:"brown"},
  {icon:<BsFillPieChartFill/>,redesign:"Unlock folders for development",date:"01 April 18.50 PM", color:"red"},
  {icon:<BsBookHalf/>,redesign:"New order #456127",date:"20 Seot 18.50 PM", color:"gray"},

  

]


export default function Home() {


  return (
    <Dashboard>
        <div className="row">
            {todayMoney.map((v,i)=>{
              return <div className='col-lg-3 col-md-6 col-sm-12' key={v.name}>
                <div className='todayMoney'>
                <div>
                   <p className='p-0 m-0'>
                     {v.name}
                   </p>
                   <p className='fw-bold fs-4 m-0 p-0'>
                   {v.money}<span className='tm3'>{v.minus}</span> 
                   </p>
                </div>
                <div className='tmIconsCard'>
                  <p className='p-0 m-0 text-light'>{v.icon}</p>
   
                </div>
               </div>
              </div>
            })}    
         

          <div className="col-lg-7 col-sm-12 d-flex p-2">
            <div className='card2 todayMoney h-100'>

            <div className='roketInf'>
              <div>
              <p className='tm1'>Built by developers</p>
              <p className='tm2'>Soft UI Dashboard </p>
              <p className='tm1'>From colors, cards, typography to complex elements, you will find the full documentation.</p>
              </div>
              <p><a href="#">Read more <BsArrowRight/></a></p>
            </div>

            <div className='roketCard d-flex justify-content-center'>
              <img src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png" alt="picture" className='rokeImg'/>
            </div>
            </div>
          </div>

          <div className="col-lg-5 col-sm-12">
           <div className='todayMoney'>
                <div className='w-100'>
                <img src="https://ak.picdn.net/shutterstock/videos/25279391/thumb/3.jpg" alt="picture"  className='imgworking'/>
                </div>          
                <div className='imgWorkingWord'>
                  <div>
                    <p className='tm11'>Work with the rockets </p>
                    <p className='tm22'>Wealth creation is an evolutionarily recent positive-sum game. 
                      It is all about who take the opportunity first.</p>
                  </div>
                  <p>Read More <BsArrowRight/></p>
              </div>
           </div>
          </div>
          
          <div className="col-lg-5 col-sm-12">
            <div className='todayMoney d-block'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data2}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
              <p className='m-0 p-0'>Sales Overview</p>
              <p className='mt-0 mb-3'><span className='tm1'>(+23%) than last week </span>in 2021</p>
              <div>
                <table className='w-100'>
                  <tbody>
                    <tr>
                      <td  className='tm1 '>
                        <div className='firstTd'>
                          <div className='tableIcons'><FaCoins/></div> 
                        Users
                        </div>
                      </td>
                      <td  className='tm1'> <div className='firstTd'>
                          <div className='tableIcons2'><IoIosRocket/></div> 
                        Clicks
                        </div></td>
                      <td  className='tm1'> <div className='firstTd'>
                          <div className='tableIcons3'><BsCreditCard/></div> 
                        Sales
                        </div></td>
                      <td  className='tm1'> <div className='firstTd'>
                          <div className='tableIcons4'><AiFillSetting/></div> 
                        Items
                        </div></td>
                    </tr>
                    <tr>
                      <td className='tableDollars'>3.6K</td>
                      <td className='tableDollars'>2m</td>
                      <td className='tableDollars'>$560</td>
                      <td className='tableDollars'>$1250</td>
                    </tr>

                    
                  </tbody>
                </table>
              </div>

            </div>
          </div>

          <div className="col-lg-7 col-sm-12">
            <div className='todayMoney d-block'>
              <p className='m-0 p-0'>Sales Overview</p>
              <p className='mt-0 mb-3'><span className='tm1'> <span className='text-success'><BsArrowUp/></span> 4% more </span>in 2021</p>
              <ResponsiveContainer width="100%" height="100%">
              <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#CB0C9F" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#252F40" />
              </LineChart>
            </ResponsiveContainer>
            </div>
          </div>

          {/* yangi table */}

          <div className="col-lg-8 col-sm-12">
            <div className='todayMoney d-block'>
              <p className='mb-0 pb-0'>Projects</p>
              <p className='tm1 mt-0'>done this month 40%</p>
              <table className='w-100 mt-3'>
                <thead>
                  <tr className='text-secondary'>
                    <th>COMPANIES</th>
                    <th>MEMBERS</th>
                    <th>BUDGET</th>
                    <th>COMPLETION</th>
                  </tr>
                </thead>
                <tbody>
                  {Soft.map((v,i)=>{
                    return  <tr key={i} >
                    <td className='pt-2 pb-2'> <span style={{color:v.completion}}>{v.icons}</span> {v.soft}</td>
                    <td>
                      <div>
                        <img src={v.img} alt="" className='tableImage'/>
                        <img src={v.img2} alt="" className='tableImage'/>
                      </div>
                    </td>
                    <td className='text-secondary'>{v.budget}</td>
                    <td className='text-secondary'>{v.protsent}
                      <div className='row1'>
                        <div className='row2' style={{backgroundColor:v.completion, width:v.protsent}}>
                        </div>
                      </div>
                    </td>
                  </tr>
                  })}
                  {/* birinchi */}
                 
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className='todayMoney'>
             <div>
                <p>orders history</p>
              <p><span className='tm1'>24%</span> this month</p>

              <div>
                {Soft2.map((v,i)=>{
                  return   <div className='d-flex' key={v.date}>
                  <p style={{color:v.color}}>{v.icon} </p>
                  <div>
                    <p className='mt-0 mb-0 pb-0'>{v.redesign}</p>
                    <p className='tm1 mt-0'>{v.date}</p>
                  </div>
                </div>
                })}
              
              </div>
            </div>
             </div>
          </div>
         
        </div>
    </Dashboard>
  )
}
