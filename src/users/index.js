import React from 'react'
import { List, Datagrid, TextField, EmailField, SimpleList } from 'react-admin'
import MyUrlField from '../components/MyUrlField'
import { useMediaQuery } from '@material-ui/core'
import { RTL } from '../App'

export const UserList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <RTL>
      <List perPage={4} {...props}>
        {isSmall ? (
          <SimpleList
            primaryText={record => record.name}
            secondaryText={record => record.phone}
            tertiaryText={record => record.website}
          />
        ) : (
          <Datagrid rowClick='edit'>
            <TextField source='id' />
            <TextField source='name' />
            {/* <TextField source="username" /> */}
            <EmailField source='email' />
            {/* <TextField source="address.street" /> */}
            <TextField source='phone' />
            <MyUrlField source='website' label='User website' />
            <TextField source='company.name' />
          </Datagrid>
        )}
      </List>
    </RTL>
  )
}
