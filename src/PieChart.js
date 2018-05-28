import React from 'react';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';


export const PieChart = (props) =>{

    return(
    <div>
        <AnnotatedMeter legend={true}
            size='medium'
            type='circle'
            units='Points'
            series={[{"label": "First", "value": 20, "colorIndex": "graph-1"}, 
            {"label": "Second", "value": 50, "colorIndex": "graph-2"}]} />
    </div>
    )
}