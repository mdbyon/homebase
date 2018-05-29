import React from 'react'
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter'
import {convertPointsToValues} from './utilities/convertPointsToValues';

export const PieChart = props => {
    
  return (
    <div className="wrapper">
      <AnnotatedMeter
        legend={true}
        size="medium"
        type="circle"
        units="Points"
        series={convertPointsToValues(props.profile.points)}
      />
    </div>
  )
}

