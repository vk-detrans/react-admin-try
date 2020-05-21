import React from 'react'
import {
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
} from 'react-admin'

export const PostList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField disabled source='id' />
      <ReferenceField source='userId' reference='users'>
        <TextField source='name' />
      </ReferenceField>
      <TextField source='title' />
      <TextField source='body' />
      <EditButton />
    </Datagrid>
  </List>
)

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
  <Edit {...props}>
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
