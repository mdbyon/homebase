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
            raidius: '',
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

    handleCheckBox = (category) =>{
        if(category == 'HOSPITAL'){
            this.setState({hospitals: !this.state.hospitals})
            if(this.state.hospitals){
                this.props.onCheck(category,this.state.radius, this.state.location)
            }
        }
        if(category == 'schools'){
            this.setState({schools: !this.state.schools})
        }
        if(category == 'churches'){
            this.setState({churches: !this.state.churches})
        }
        if(category == 'libraries'){
            this.setState({libraries: !this.state.libraries})
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
            <label htmlFor="showCategories">Which categories of community service interests you?</label>
            <div className = 'fieldEntry'>
                <Checkbox
                label="Hospitals"
                onCheck = {this.handleCheckBox('HOSPITAL')}
                />
            </div>
            <div className = 'fieldEntry'>
                <Checkbox
                label="Schools"
                onCheck = {this.handleCheckBox('schools')}
                />
            </div>
            <div className = 'fieldEntry'>
                <Checkbox
                label="Churches"
                onCheck = {this.handleCheckBox('churches')}
                />
            </div>
            <div className = 'fieldEntry'>
                <Checkbox
                label="Libraries"
                onCheck = {this.handleCheckBox('libraries')}
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



