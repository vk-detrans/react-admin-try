import React from 'react'
import { List, Datagrid, TextField, EmailField } from 'react-admin'
import MyUrlField from '../components/MyUrlField'
import LanguageSwitcher from '../components/LanguageSwitcher'

export const UserList = (props) => {
  // const translate = useTranslate()
  return (
    <>
      <List perPage={4} {...props}>
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
      </List>
      <LanguageSwitcher />
    </>
  )
}
