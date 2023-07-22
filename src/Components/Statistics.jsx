/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { useEffect, useState,  PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('statistics.json')
        .then(response => response.json())
        .then(data => setData(data))
    },[]);

    class CustomizedLabel extends PureComponent {
        render() {
          const { x, y, stroke, value } = this.props;
      
          return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
              {value}
            </text>
          );
        }
      }
    

    class CustomizedAxisTick extends PureComponent {
        render() {
          const { x, y, stroke, payload } = this.props;
      
          return (
            <g transform={`translate(${x},${y})`}>
              <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                {payload.value}
              </text>
            </g>
          );
        }
      }

    return (
        <div className='w-full'>
       
        <div className='w-5/6 m-auto my-20'>
            <LineChart
                width={1200}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 10,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" height={100} tick={<CustomizedAxisTick />} />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                </LineChart>
      
         </div>
        </div>
    );
};

export default Statistics;