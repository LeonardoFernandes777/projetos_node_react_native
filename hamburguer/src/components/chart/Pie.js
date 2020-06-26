import React from 'react';
import {Pie as Grafico} from 'react-chartjs-2';


const Pie = ({data, labels, backgroundColor, title}) =>{
  return(
    <div>
      <Grafico 
          data={{
                labels,
                datasets:[{
                    label: title,
                    data,
                    backgroundColor
                }]
          }}
      />
    </div>
  )
}

export default Pie;