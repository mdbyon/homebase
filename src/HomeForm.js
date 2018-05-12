import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import Label from 'react-desktop/windows';
import RaisedButton from 'material-ui/RaisedButton';
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
            libraries: false
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
        <form onSubmit = {(e)=>{this.handleSubmit(e,this.state)}}>
            <div className = 'formEntry'>
            <label>What city would you like to Volunteer in?</label>
            <div className = 'fieldEntry'>
                <TextField
                className="location"                                
                placeholder="Enter Location"
                onChange = {this.handleChange}
                />
            </div>
            </div>

            <div className = 'formEntry'>
            <label>How many mile radius would you like to search in?</label>
            <div className = 'fieldEntry'>
                <TextField
                className="radius"                                
                placeholder="Enter Radius"
                onChange = {this.handleRadius}
                />
            </div>
            </div>
            <div className = 'formEntry'>
            <label htmlFor="showCategories">Which categories of community service interests you?</label>
            <div className = 'fieldEntry'>
                <Checkbox
                label="Hospitals"
                onCheck = {(e) => {this.handleCheckBox(e,'hospital')}}
                />
            </div>
            <div className = 'fieldEntry'>
                <Checkbox
                label="Schools"
                onCheck = {(e) => {this.handleCheckBox(e, 'school')}}
                />
            </div>
            <div className = 'fieldEntry'>
                <Checkbox
                label="Churches"
                onCheck = {this.handleCheckBox}
                />
            </div>
            <div className = 'fieldEntry'>
                <Checkbox
                label="Libraries"
                onCheck = {this.handleCheckBox}
                />
            </div>
            </div>
            <div>
            <RaisedButton className = 'HomeButton' label="Submit" primary={true}
            type = "submit" />
            </div>
        </form>
        )
    }
}

  export default HomeForm



