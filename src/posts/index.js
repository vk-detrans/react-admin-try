import React from 'react'
import {
  Filter,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Create,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  SimpleList,
} from 'react-admin'
import { useMediaQuery } from '@material-ui/core'

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='User' source='userId' reference='users' allowEmpty>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
)

export const PostList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <List filters={<PostFilter />} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.title}
        />
      ) : (
        <Datagrid rowClick='edit'>
          <TextField disabled source='id' />
          <ReferenceField source='userId' reference='users'>
            <TextField source='name' />
          </ReferenceField>
          <TextField source='title' />
          <TextField source='body' />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source='userId' reference='users'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <TextInput multiline source='body' />
    </SimpleForm>
  </Create>
)

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <ReferenceInput source='userId' reference='users'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <TextInput multiline source='body' />
    </SimpleForm>
  </Edit>
)
