import englishMessages from 'ra-language-english'

const customMessages = {
  custom: {
    users: {
      website: 'User WebS',
    },
    language: 'Language',
    languages: {
      English: 'English',
      Arabic: 'عربى',
    },
    localeLanguages: {
      English: 'English',
      Arabic: 'Arabic',
    }
  },
}

const combinedMessages = {...englishMessages, ...customMessages}

export default combinedMessages