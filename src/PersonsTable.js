import React, { Component } from 'react';
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
            <Table className = 'table'>
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

