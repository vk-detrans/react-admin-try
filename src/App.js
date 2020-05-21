import React from 'react'
import { Admin, Resource, EditGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import PostsIcon from '@material-ui/icons/ListSharp'
import UsersIcon from '@material-ui/icons/People'

import englishMessages from './i18n/en.js'

import LanguageSwitcher from './components/LanguageSwitcher'
import { UserList } from './users'
import { PostList, PostEdit } from './posts'

const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === 'en') {
    // initial call, must return synchronously
    return englishMessages
  }
  return import(`./i18n/${locale}.js`).then((messages) => messages.default)
}, 'en')

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <LanguageSwitcher />
    <Resource name='posts' list={PostList} icon={PostsIcon} edit={PostEdit} />
    <Resource name='users' list={UserList} icon={UsersIcon} />
  </Admin>
)

export default App
