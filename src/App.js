import React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import arabicMessages from 'ra-language-arabic'
import PostsIcon from '@material-ui/icons/ListSharp'
import UsersIcon from '@material-ui/icons/People'

import { UserList } from './users'
import { PostList } from './posts'


const i18nProvider = polyglotI18nProvider(() => arabicMessages, 'ar')

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
    <Resource name='posts' list={PostList} icon={PostsIcon} />
    <Resource name='users' list={UserList} icon={UsersIcon} />
  </Admin>
)

export default App
