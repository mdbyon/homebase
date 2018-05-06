import React from 'react';
import {shallow} from 'enzyme';
import RegisterPage from '../RegisterPage';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TitleBar} from 'react-desktop/windows';

configure({ adapter: new Adapter() });

describe('WelcomeForm', ()=>{
    it('should render a div', ()=>{
    });
});