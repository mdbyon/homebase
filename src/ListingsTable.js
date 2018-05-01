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

class ListingsTable extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        var listings = this.props.listings.map((listing, index) => {
            return(
                <TableRow>
                    <TableHeaderColumn> {index} </TableHeaderColumn>
                    <TableHeaderColumn> {listing.hospitals.name} </TableHeaderColumn>
                    <TableHeaderColumn> {listing.hospitals.vicinity} </TableHeaderColumn>
                </TableRow>
            )
        })
        
        return (
            <Table>
            <TableHeader>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Business Name</TableHeaderColumn>
                <TableHeaderColumn>Address</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody>
                {listings}
            </TableBody>
        </Table> 
        );
    }
}

  export default ListingsTable;

