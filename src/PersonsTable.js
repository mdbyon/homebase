import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class PersonsTable extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            open: true,
            onSettings: false,
            onServiceHistory: false,
            showProfileForm: false,
        };
    }

    render(){
        var users = this.props.users.map((user, index) => {
            return(
                <TableRow>
                    <TableHeaderColumn> {index} </TableHeaderColumn>
                    <TableHeaderColumn> {user.age} </TableHeaderColumn>
                    <TableHeaderColumn> {user.sex} </TableHeaderColumn>
                </TableRow>
            )
        })
        
        return (
            <Table>
            <TableHeader>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Age</TableHeaderColumn>
                <TableHeaderColumn>Sex</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody>
                {users}
            </TableBody>
        </Table> 
        );
    }
}

  export default PersonsTable;

