import  Dashboard  from "../styles/dashboardW";
import { FaCoins } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";


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
  {soft:"Soft UI Shopify Version",img:"img",budget:"$14.000",completion:"green",protsent:"60%"},
  {soft:"Soft UI Shopify Version",img:"img",budget:"$14.000",completion:"red",protsent:"32%"},
  {soft:"Soft UI Shopify Version",img:"img",budget:"$14.000",completion:"yellow",protsent:"84%"},
  {soft:"Soft UI Shopify Version",img:"img",budget:"$14.000",completion:"blue",protsent:"57%"},
  {soft:"Soft UI Shopify Version",img:"img",budget:"$14.000",completion:"brown",protsent:"25%"}
]



export default function Home() {


  return (
    <Dashboard>
        <div className="row">
            {todayMoney.map((v,i)=>{
              return <div className='col-lg-3 col-md-6 col-sm-12'>
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
              <p><a href="#">Read more</a></p>
            </div>

            <div className='roketCard'>
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
                  <p>Read More</p>
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
                        Users
                        </div></td>
                      <td  className='tm1'> <div className='firstTd'>
                          <div className='tableIcons'><FaCoins/></div> 
                        Users
                        </div></td>
                      <td  className='tm1'> <div className='firstTd'>
                          <div className='tableIcons'><FaCoins/></div> 
                        Users
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
              <p className='mt-0 mb-3'><span className='tm1'>4% more </span>in 2021</p>
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
                    return  <tr>
                    <td> <span><FaCoins/></span> {v.soft}</td>
                    <td>{v.img}</td>
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
                <div className='d-flex'>
                  <p>icon</p>
                  <div>
                    <p className='mt-0 mb-0 pb-0'>$2.400- Redesign store</p>
                    <p className='tm1 mt-0'>90 Jun 7.20 PM</p>
                  </div>
                </div>

                <div className='d-flex'>
                  <p>icon</p>
                  <div>
                    <p className='mt-0 mb-0 pb-0'>$2.400- Redesign store</p>
                    <p className='tm1 mt-0'>90 Jun 7.20 PM</p>
                  </div>
                </div>

                <div className='d-flex'>
                  <p>icon</p>
                  <div>
                    <p className='mt-0 mb-0 pb-0'>$2.400- Redesign store</p>
                    <p className='tm1 mt-0'>90 Jun 7.20 PM</p>
                  </div>
                </div>
              </div>
            </div>
             </div>
          </div>
         
        </div>
    </Dashboard>
  )
}
