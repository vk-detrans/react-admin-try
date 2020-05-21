import React from 'react'
import { useTranslate } from 'react-admin'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import LanguageSwitcher from '../components/LanguageSwitcher'

const Dashboard = props => {
  const t = useTranslate()

  return (
    <>
      <Card>
        <CardHeader title={t('dashboard')} />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      </Card>
      <Card>
        <CardHeader title={t('custom.language')} />
        <CardContent>
          <LanguageSwitcher />
        </CardContent>
      </Card>
    </>
  )
}

export default Dashboard
