import React from 'react'
import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import App from 'grommet/components/App'
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import User from 'grommet/components/icons/base/User'

export const SideBar = props => {
  return (
    <Box size="medium">
      <Sidebar className="sidebar" colorIndex="neutral-1" fixed={true}>
        <Menu primary={true}>
          <Anchor onClick={e => props.handleHome(e)}>Home</Anchor>
          <Anchor onClick={e => props.handlePreferences(e)}>
            {' '}
            Look for Opportunities
          </Anchor>
          <Anchor onClick={e => props.handleListings(e)}>Show Listings</Anchor>
        </Menu>
        <Footer pad="medium">
          <Button icon={<User />} />
        </Footer>
      </Sidebar>
    </Box>
  )
}
