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

const arAction = arabicMessages.ra.action
const customAction = customMessages.ra.action

const combinedMessages = {
  ...arabicMessages,
  ...customMessages,
  ra: { ...arabicMessages.ra, ...customMessages.ra, action: {...arAction, ...customAction} },
}

export default combinedMessages
