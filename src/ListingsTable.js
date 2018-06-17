import React, { Component } from "react";
import PropTypes from "prop-types";
import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";
import Table from "grommet/components/Table";
import TableRow from "grommet/components/TableRow";
import ListingsModalPageContainer from "./containers/pages/ListingsModalPageContainer";
import ListingsContainer from "./containers/ListingsContainer";

class ListingsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      openModal: false,
      currentListing: {}
    };
  }

  handleChange(value) {
    this.setState({
      sel: value
    });
  }

  handleRowClick = listing => {
    this.props.requestOpenModal();
    this.setState({ currentListing: listing });
  };

  render() {
    console.log(this.props.listings);
    console.log(Object.keys(this.props.listings));
    if (this.props.listings != null) {
      var listings = Object.keys(this.props.listings).map((category, index) => {
        return (
          <Tab className={`listing-tab-${category}`} title={category}>
            <Table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Business</th>
                </tr>
              </thead>
            </Table>
            {this.props.listings[category].map((listing, index) => {
              return (
                <div>
                  <Table
                    responsive={true}
                    selectable={true}
                    className={category}
                    scrollable={true}
                  >
                    <tbody>
                      <TableRow
                        className={`table-row-${index}`}
                        onClick={() => {
                          this.handleRowClick(listing);
                        }}
                      >
                        <td> {index} </td>
                        <td> {listing.name} </td>
                      </TableRow>
                    </tbody>
                  </Table>
                </div>
              );
            })}
          </Tab>
        );
      });
    }

    return (
      <Tabs
        className="tabs"
        activeIndex={this.state.selectedIndex}
        onActive={e => this.setState({ selectedIndex: e })}
      >
        {listings}
        {this.props.requests.openModal ? (
          <ListingsModalPageContainer listing={this.state.currentListing} />
        ) : (
          <div />
        )}
      </Tabs>
    );
  }
}

export default ListingsTable;
