import React from 'react';
import {shallow} from 'enzyme';
import RegisterPage from '../../RegisterForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TitleBar} from 'react-desktop/windows';

configure({ adapter: new Adapter() });

describe('Register Page', ()=>{
    const wrapper = shallow(<RegisterPage />);
    it('should render', ()=>{
        expect(wrapper.find('WelcomeWrapper')).to.exist;
    });
});