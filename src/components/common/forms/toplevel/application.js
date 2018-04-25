// @flow
import * as React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import MenuItem from 'material-ui/Menu/MenuItem'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'

import Form from '../../../utils/form'

type Props = {
  createResource: Function,
  providers: Array<Object>,
  categories: Array<Object>,
  publishers: Array<Object>,
}

const initFields = {
  providers: [],
  category: '',
  publisher: '',
  name: '',
  description: '',
}

const ApplicationForm = ({
  createResource,
  providers,
  categories,
  publishers,
}: Props): React.Node => (
  <React.Fragment>
    <Form initFields={initFields} type="applications">
      {({ onChange, onSubmit, fields, onSelectChange }) => (
        <form onSubmit={onSubmit(createResource)} className="form">
          <TextField
            id="name"
            label="name"
            type="string"
            onChange={onChange('name')}
            value={fields.name}
            className="input"
            required
          />
          <TextField
            id="description"
            label="description"
            type="string"
            onChange={onChange('description')}
            value={fields.description}
            className="input"
          />
          <FormControl className="input">
            <InputLabel htmlFor="provider">provider(s)</InputLabel>
            <Select
              multiple
              input={<Input id="provider" />}
              onChange={onSelectChange('providers')}
              value={fields.providers}
              renderValue={selected =>
                providers
                  .filter(provider => selected.includes(provider.id))
                  .map(el => el.name)
                  .join(', ')
              }
            >
              {providers.map(provider => (
                <MenuItem key={provider.name} value={provider.id}>
                  <Checkbox checked={fields.providers.indexOf(provider.id) > -1} />
                  {provider.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="input">
            <InputLabel htmlFor="publisher">publisher</InputLabel>
            <Select
              input={<Input id="publisher" />}
              onChange={onSelectChange('publisher')}
              value={fields.publisher}
            >
              {publishers.map(publisher => (
                <MenuItem key={publisher.name} value={publisher.id}>
                  {publisher.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="input">
            <InputLabel htmlFor="category">category</InputLabel>
            <Select
              input={<Input id="category" />}
              onChange={onSelectChange('category')}
              value={fields.category}
            >
              {categories.map(category => (
                <MenuItem key={category.name} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="submit">
            <Button type="submit" size="large" variant="raised" color="secondary">
              Submit
            </Button>
          </div>
        </form>
      )}
    </Form>

    <style jsx>{`
      .form :global(.input) {
        box-sizing: border-box;
        padding-right: 8px;
        margin-top: 12px;
        width: 50%;
      }

      .form .submit {
        padding: 12px 0;
      }
    `}</style>
  </React.Fragment>
)

export default ApplicationForm