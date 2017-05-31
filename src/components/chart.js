import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  let count = 0;
  let sum = 0;
  data.forEach(element => {
    count ++;
    sum += element;
  })
  return (sum/count).toFixed(0);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={80} width={120} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
