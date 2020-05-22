import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import { createMuiTheme, jssPreset, ThemeProvider } from '@material-ui/core/styles'
import PostsIcon from '@material-ui/icons/ListSharp'
import UsersIcon from '@material-ui/icons/People'
import blue from '@material-ui/core/colors/blue'

import { create as createJss } from 'jss'
// import { JssProvider } from 'react-jss'
import rtl from 'jss-rtl'

import englishMessages from './i18n/en.js'

import { UserList } from './users'
import { PostList, PostCreate, PostEdit } from './posts'
import Dashboard from './dashboard/index.js'

const jss = createJss({ plugins: [...jssPreset().plugins, rtl()] })

export const RTL = props => {
  console.log(props.children)
  return <ThemeProvider jss={jss}>{props.children}</ThemeProvider>
  // return <StylesProvider jss={jss}>{props.children}</StylesProvider>
  // return <JssProvider jss={jss}>{props.children}</JssProvider>
}

const defaultTheme = {
  direction: 'ltr',
  isRtl: false,
  palette: {
    primary: blue,
  },
  secondary: {
    light: '#0066ff',
    main: '#0044ff',
    // dark: will be calculated from palette.secondary.main,
    contrastText: '#ffcc00',
  },
}

const rtlTheme = {
  // direction: 'ltr',
  // isRtl: false
  direction: 'rtl',
  isRtl: true,
}
const theme = { ...defaultTheme, ...rtlTheme }
const themeWithDirection = createMuiTheme(theme)

const i18nProvider = polyglotI18nProvider(locale => {
  if (locale === 'en') {
    // initial call, must return synchronously
    return englishMessages
  }
  return import(`./i18n/${locale}.js`).then(messages => messages.default)
}, 'en')

console.log(themeWithDirection)

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
  <RTL>
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    dashboard={Dashboard}
    theme={themeWithDirection}
  >
    <Resource
      name='posts'
      list={PostList}
      icon={PostsIcon}
      create={PostCreate}
      edit={PostEdit}
    />
    <Resource name='users' list={UserList} icon={UsersIcon} />
  </Admin>
  </RTL>
)

export default App
