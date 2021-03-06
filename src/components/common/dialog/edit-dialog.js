// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import FormSwitcher from '../forms/form-switcher'
import { capitalize } from '../../../utils/string'
import { allResourcesAndVersionsSelector } from '../../../selectors/resources-selectors'

type Props = {
  open: boolean,
  resource?: {
    id: number | string,
    name: string,
    [string]: any,
  },
  type: string,
  closeAction: Function,
  editAction: Function,
  resources: { [string]: Object[] },
}

const Transition = props => <Slide direction="up" {...props} />

export const EditDialog = ({
  open,
  closeAction,
  resource,
  type,
  editAction,
  resources,
}: Props): React.Node => {
  const updater = (...args): void => {
    editAction(...args)
    setTimeout(closeAction, 300)
  }
  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={closeAction}>
      <DialogTitle>EDIT {resource && resource.name && capitalize(resource.name)}</DialogTitle>
      <DialogContent>
        <FormSwitcher
          {...resources}
          selected={type}
          createResource={updater}
          initFields={resource}
          method="PUT"
          editMode
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAction} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

EditDialog.defaultProps = {
  resource: {
    name: '',
    id: '',
  },
}

const mapStateToProps = (state: Object): Object => ({
  resources: allResourcesAndVersionsSelector(state),
})

export default connect(mapStateToProps)(EditDialog)
