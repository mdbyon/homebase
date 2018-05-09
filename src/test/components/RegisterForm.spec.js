import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegisterForm from '../../RegisterForm';

configure({ adapter: new Adapter() });
 
describe('Register Form', ()=>{
    const wrapper = shallow(<RegisterForm />);
    it('should redirect when login button is clicked', ()=>{
        wrapper.find('#loginButton').simulate('click');
        expect(wrapper.find('Redirect').props().to).to.equal('/home')
    });
});