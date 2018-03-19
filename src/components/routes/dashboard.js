// @flow
import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import DeveloperModeIcon from 'material-ui-icons/DeveloperMode'
import InsertDriveFileIcon from 'material-ui-icons/InsertDriveFile'
import ListIcon from 'material-ui-icons/List'

import Title from '../common/title'
import ConnectedLayoutExtended from '../common/layout-extended'
import AddDevice from './dashboard/add-device'
import AddResource from './dashboard/add-resource'
import Resources from './dashboard/resources'
import { fetchResources as fetchResourcesAction } from '../../actions/resources-actions'

const SidebarItems = (): React.Node => (
  <List>
    <ListItem button component={Link} to="/dashboard/add-device">
      <ListItemIcon>
        <DeveloperModeIcon />
      </ListItemIcon>
      <ListItemText primary="Add Device" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/add-resource">
      <ListItemIcon>
        <InsertDriveFileIcon />
      </ListItemIcon>
      <ListItemText primary="Add Resource" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/resources">
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="Resources" />
    </ListItem>
  </List>
)

type Props = {
  fetchResources: Function,
}

class Dashboard extends React.Component<Props> {
  props: Props

  componentDidMount() {
    const { fetchResources } = this.props
    fetchResources()
  }

  render(): React.Node {
    return (
      <ConnectedLayoutExtended title="App Store - Dashboard" sideBarComponent={<SidebarItems />}>
        <div className="container">
          <Title> Dashboard </Title>
        </div>
        <Switch>
          <Route path="/dashboard/add-device" component={AddDevice} />
          <Route path="/dashboard/add-resource" component={AddResource} />
          <Route path="/dashboard/resources" component={Resources} />
        </Switch>

        <style jsx>{`
          .container {
            margin: 100px 0;
            text-align: center;
          }
        `}</style>
      </ConnectedLayoutExtended>
    )
  }
}

const enhancer = compose(withRouter, connect(null, { fetchResources: fetchResourcesAction }))

export default enhancer(Dashboard)
