"use client"

import {  Line } from 'react-chartjs-2';
import "chart.js/auto";
import { Order } from '@/types';

//! reactta import { Chart  } from "chart.js/auto"


const Graph = ({data}: {data: Order[] }) => {
   //! grafik kutuphanesinin istediği format
  
  const gData = {
        labels: data.map((i) => i.order_date ),
      
        datasets: [
            {
                id:1,
                label: 'fiyat',
                data: data.map((i) => i.total_price),
            },
        ],
    };

   return <Line data={gData} />;

};

export default Graph;