import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {TextField} from 'material-ui';
import {Tabs, Tab} from 'material-ui/Tabs';
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
        this.state ={
            value: 'a'
        }
        
    }

    handleChange (value) {
        this.setState({
          value: value,
        });
    };

    render(){

        console.log(this.props.listings);
        if(this.props.listings.hospitals != null){
            var listings = Object.keys(this.props.listings).map((listing) =>{
                console.log(listing);
        return (
            <div>
                <Tab label = {listing}/>
                <Table className = 'tableHeader'>
                        <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>#</TableHeaderColumn>
                                    <TableHeaderColumn>Business</TableHeaderColumn>
                                    <TableHeaderColumn>Address</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                </Table>
           
            {
                this.props.listings[listing].map((desc, index)=>{

                return (
                    <Table className = 'tableBody'>
                        <TableBody>
                        <TableRow>
                            <TableHeaderColumn> {index} </TableHeaderColumn>
                                <TableHeaderColumn> {desc.name} </TableHeaderColumn>
                                <TableHeaderColumn> {desc.vicinity} </TableHeaderColumn>
                        </TableRow>
                        </TableBody>
                        </Table>
                     
                        );   
                })
            }
        </div>
        )
    })
}
     
    return (
        <Tabs
            value={this.state.value}
            onChange={this.handleChange}
        >
            {listings}
        </Tabs>
        
    )
}
}
    
    


  export default ListingsTable;

