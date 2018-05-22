import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tabs from 'grommet/components/Tabs'
import Tab from 'grommet/components/Tab'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'

class ListingsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  handleChange(value) {
    this.setState({
      sel: value,
    })
  }

  render() {
    console.log(this.props.listings)
    console.log(Object.keys(this.props.listings))
    if (this.props.listings != null) {
      var listings = Object.keys(this.props.listings).map((listing, index) => {
        return (
          <Tab className="listingTab" title={listing}>
            <Table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Business</th>
                </tr>
              </thead>
            </Table>

            {this.props.listings[listing].map((desc, index) => {
              return (
                <div>
                  <Table className={listing} scrollable={true}>
                    <tbody>
                      <TableRow>
                        <td> {index} </td>
                        <td> {desc.name} </td>
                      </TableRow>
                    </tbody>
                  </Table>
                </div>
              )
            })}
          </Tab>
        )
      })
    }

    return (
      <Tabs
        className="tabs"
        activeIndex={this.state.selectedIndex}
        onActive={e => this.setState({ selectedIndex: e })}
      >
        {listings}
      </Tabs>
    )
  }
}

export default ListingsTable
