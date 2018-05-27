import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../../HomePage';

configure({ adapter: new Adapter() });

describe('Home Page with no data' ,() =>{
    beforeEach(() => {
        const props = {
            points : 0,
            completedPreferences : false,
        }
        const wrapper = shallow(<HomePage {...props}/>);
      });
    
    it('should render a div', () =>{
        expect(wrapper.find('div')).to.exist;
    })

    it('should render a pie chart of points' ,() =>{
        expect(wrapper.find(<PieChart />).length).toBe(1);
    })

    it('should pass a prop to the pie chart on users point total', ()=>{
        const pieChart = wrapper.find(<PieChart />)
        expect(PieChart.props().points).toEqual(props.points);
    })
    it('if no preferences prop, then redirect to preferences page' ,() => {
        expect(wrapper.find(<Redirect />).length).toBe(1);
    })

})

describe('Home Page with data' , () =>{

    beforeEach(() => {
        const props = {
            points : 100,
            completedPreferences : true,
        }
        const wrapper = shallow(<HomePage {...props}/>);
      });
    
    it('should render a pie chart of points' ,() =>{
        expect(wrapper.find(<PieChart />).length).toBe(1);
    })

})