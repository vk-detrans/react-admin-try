import React from 'react'
import { useSetLocale, useLocale, useTranslate } from 'react-admin'
import Button from '@material-ui/core/Button'

const languages = {
  en: {
    name: 'English',
    locale: 'en',
    isRtl: false,
  },
  ar: {
    name: 'Arabic',
    locale: 'ar',
    isRtl: true,
  },
}

const LanguageSwitcher = (props) => {
  const setLocale = useSetLocale()
  const locale = useLocale()
  const t = useTranslate()

  return (
    <div>
      <div>{t('custom.language')}</div>
      <Button
        disabled={locale === languages.en.locale}
        onClick={() => setLocale(languages.en.locale)}
      >
        {`${t('custom.localeLanguages.English')} (${t('custom.languages.English')})`}
      </Button>
      <Button
        disabled={locale === languages.ar.locale}
        onClick={() => setLocale(languages.ar.locale)}
      >
        {`${t('custom.localeLanguages.Arabic')} (${t('custom.languages.Arabic')})`}
      </Button>
    </div>
  )
}

export default LanguageSwitcher
