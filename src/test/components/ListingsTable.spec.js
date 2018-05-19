import React from 'react';
import {shallow, mount} from 'enzyme';
import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListingsTable from '../../ListingsTable';
import expectJSX from 'expect-jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
expect.extend(expectJSX);
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import { MuiThemeProvider } from 'material-ui/styles';


configure({ adapter: new Adapter() });

const testVals = {

    hospitals:[
        {
            name: "Nice Hospital",
            vicinity: "69 Street"  
        },
        {
            name: "Amazing Hospital",
            vicinity: "111 Main Street"
        }
    ],
    churches:[
        {
            name: "Holy Church",
            vicinity: "123 Holy Drive"
        },
        {
            name: "Friends Church",
            vicinity: "55 La Palma"
        }
    ]
}

const hospitalListings = (
<div>
    <TableRow>
        <TableHeaderColumn> 1 </TableHeaderColumn>
        <TableHeaderColumn> Nice Hospital </TableHeaderColumn>
        <TableHeaderColumn> 69 Street </TableHeaderColumn>
    </TableRow>

    <TableRow>
        <TableHeaderColumn> 2 </TableHeaderColumn>
        <TableHeaderColumn> Amazing Hospital </TableHeaderColumn>
        <TableHeaderColumn> 111 Main Street </TableHeaderColumn>
    </TableRow>
</div>
);

const churchListings = (
    <div>
        <TableRow>
            <TableHeaderColumn> 1 </TableHeaderColumn>
            <TableHeaderColumn> Holy Church </TableHeaderColumn>
            <TableHeaderColumn> 123 Holy Drive </TableHeaderColumn>
        </TableRow>
    
        <TableRow>
            <TableHeaderColumn> 2 </TableHeaderColumn>
            <TableHeaderColumn> Friends Church </TableHeaderColumn>
            <TableHeaderColumn> 55 La Palma </TableHeaderColumn>
        </TableRow>
    </div>
);
 
describe('Listings Table', ()=>{

    const wrapper = shallow(<ListingsTable listings= {testVals}/>)

    it('should render a tabbed table depending on listings props', ()=>{
        expect(wrapper.find('Tabs')).to.exist;
    });

    it('should populate each tab correctly', ()=>{
        expect(wrapper.find('#hospitalListings')).toEqualJSX(hospitalListings)
        expect(wrapper.find('#churchListings')).toEqualJSX(churchListings)
        
    });
    
});