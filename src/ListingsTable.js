import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
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

        console.log(this.props.listings);
        if(this.props.listings.hospitals != null){
            var listings = this.props.listings.hospitals.map((listing, index) => {
            return(
                <TableRow>
                    <TableHeaderColumn> {index} </TableHeaderColumn>
                    <TableHeaderColumn> {listing.name} </TableHeaderColumn>
                    <TableHeaderColumn> {listing.vicinity} </TableHeaderColumn>
                </TableRow>
            )
        })
    }
        
        return (
            <Table className = 'table'>
            <TableHeader>
            <TableRow>
                <TableHeaderColumn>#</TableHeaderColumn>
                <TableHeaderColumn>Business</TableHeaderColumn>
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

