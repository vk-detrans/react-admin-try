import arabicMessages from 'ra-language-arabic'

const customMessages = {
  custom: {
    users: {
      website: 'User WebS',
    },
    language: 'لغة',
    languages: {
      English: 'English',
      Arabic: 'عربى',
    },
    localeLanguages: {
      English: 'الإنجليزية',
      Arabic: 'عربى',
    }
  },
  ra: {
    action: {
      export: 'Custom Export',
    },
  },
}

const combinedMessages = {
  ...arabicMessages,
  ...customMessages,
  ra: { ...arabicMessages.ra, ...customMessages.ra },
}

export default combinedMessages
