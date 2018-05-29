import {convertPointsToValues} from '../../utilities/convertPointsToValues';
import {expect} from 'chai';

const expectedValues = 
    
    [
        {
         label: 'Hospitals', value: 20, colorIndex: 'graph-1' 
        
        },

        { 
            label: 'Schools', value: 50, colorIndex: 'graph-2' 
        },  
    ]

const points = {
        hospitals: 20,
        schools: 50
    }


describe('Points to Pie Chart Values', ()=>{

    it('converts it to correct Grommet Format', ()=>{
        expect(convertPointsToValues(points)).to.deep.equal(expectedValues);
    })
})