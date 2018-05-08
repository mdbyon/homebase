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
            hospitals: false,
            schools: false,
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


    handleCheckBox = () =>{     
        this.setState({hospitals: !this.state.hospitals})
            if(this.state.hospitals){
                this.props.onCheck('hospital',this.state.radius, this.state.location)
            }
    }

    render(){
        return (
        <form >
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
                onCheck = {this.handleCheckBox}
                />
            </div>
            <div className = 'fieldEntry'>
                <Checkbox
                label="Schools"
                onCheck = {this.handleCheckBox}
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



