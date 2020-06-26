import React from 'react';
import {Bar as Grafico} from 'react-chartjs-2';


const Bar = ({data, labels, backgroundColor, title}) =>{
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

export default Bar;