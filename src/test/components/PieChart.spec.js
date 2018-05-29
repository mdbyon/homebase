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
            points:{
                hospitals: 20,
                schools: 80
            }
        }
        wrapper = shallow(<PieChart />)
    })

    it('always renders a div', ()=>{
        expect(wrapper.find('div.wrapper').length).to.equal(1);
    })
    it('passes prop for points in each category to grommet Component', ()=>{
        expect(wrapper.find('AnnotatedMeter').props().points).to.equal(props.points);
    })
})