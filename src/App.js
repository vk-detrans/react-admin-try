import React from "react"
import { Admin, Resource, ListGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import polyglotI18nProvider from "ra-i18n-polyglot"
import arabicMessages from "ra-language-arabic"
import PostsIcon from "@material-ui/icons/ListSharp"
import UsersIcon from "@material-ui/icons/People"
import { UserList } from "./users"


const i18nProvider = polyglotI18nProvider(() => arabicMessages, "ar")

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")
const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <Resource name="posts" list={ListGuesser} icon={PostsIcon} />
    <Resource name="users" list={UserList} icon={UsersIcon} />
  </Admin>
)

export default App
