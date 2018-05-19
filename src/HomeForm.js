import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import CheckBox from 'grommet/components/CheckBox';
import Label from 'react-desktop/windows';

import './styles/form.css';

class HomeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: '',
            radius: '',
            hospital: false,
            school: false,
            churches: false,
            libraries: false,
            isLoading: false,
        };  
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    handleChange = (e) =>{
        this.setState({location: e.target.value})
    }

    handleRadius = (e) =>{
        this.setState({radius: e.target.value})
    }


    handleCheckBox = (e, value) =>{     
        
        if(value == 'hospital'){
            this.setState({hospital: !this.state.hospitals})
        }
        if(value == 'school'){
            this.setState({school: !this.state.schools})
        }
            
    }

    handleSubmit = (e, checkedValues) =>{
        e.preventDefault();
        Object.keys(checkedValues).map((value) => {
            console.log(value);
            if(checkedValues[value] == true){
                this.props.onCheck(value, this.state.radius, this.state.location)
            }
        })
    }
    

    render(){
        return (
        <div id = 'homeContainer'>
        <Form className = 'homeForm'
              onSubmit = {(e) => this.handleSubmit(e, this.state)}>
            <Header>
                <Heading>
                    Find Volunteering Opportunities
                </Heading>
            </Header>
            <FormFields>
            <FormField label='What city would you like to volunteer in?'>
                <TextInput onDOMChange = {this.handleChange}/>
            </FormField>

            <FormField label='Enter Search Radius'>
                <TextInput onDOMChange = {this.handleRadius}/>
            </FormField>

            <FormField label ='What categories interests you?'>
                <CheckBox label = 'Hospitals'
                          onChange = {(e) => this.handleCheckBox(e, 'hospital')}/>
                <CheckBox label = 'Schools'
                          onChange = {(e) => this.handleCheckBox(e, 'school')}/>
                <CheckBox label = 'Churches'
                          onChange = {(e) => this.handleCheckBox(e, 'church')}/>
                <CheckBox label = 'Libraries'
                          onChange = {(e) => this.handleCheckBox(e, 'library')}/>
            </FormField>
            </FormFields>
            <Footer pad={{"vertical": "medium"}}>
                <Button label='Submit'
                type='submit'
                primary={true}
                 />
            </Footer>
        </Form>
        </div>
        )
    }
}

  export default HomeForm



