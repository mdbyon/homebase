import changeCase from 'change-case'

export const convertPointsToValues = points =>{
    var result= Object.keys(points).map((category, index) =>{
            return {
                label : `${changeCase.titleCase(category)}`,
                value: points[category],
                colorIndex: `graph-${index + 1}`
            };     
        
    })
return result
}