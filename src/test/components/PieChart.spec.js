import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PieChart} from '../../PieChart';

configure({ adapter: new Adapter() });

describe('Pie Chart', ()=>{
    let wrapper
    let props
    beforeEach(()=>{
        props = {
            
        }
        wrapper = shallow(<PieChart />)
    })
    it('always renders a div', ()=>{
        exp
    })
})