import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../../HomePage';

configure({ adapter: new Adapter() });

describe('Home Page with no data' ,() =>{
    let wrapper;

    beforeEach(() => {
       const props = {
            points : 0,
            completedPreferences : false,

            requests:{
                requestPreferences: false,
            }
        }
        wrapper = shallow(<HomePage {...props}/>);
      });

    it('should render a div', () =>{
        expect(wrapper.find('div.someClass').length).to.equal(1);
    })

    it('should not render a pie chart of points' ,() =>{
        expect(wrapper.find(<PieChart />).length).toBe(0);
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
    let wrapper;

    beforeEach(() => {
        props = {
            points : 100,
            completedPreferences : true,

            requests:{
                requestPreferences: false,
            }
        }
        const wrapper = shallow(<HomePage {...props}/>);
      });
    
    it('should render a pie chart of points' ,() =>{
        expect(wrapper.find(<PieChart />).length).toBe(1);
    })

})