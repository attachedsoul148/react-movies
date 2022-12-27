import React, { useReducer, createContext } from 'react'
import { IntlProvider } from 'react-intl'

export type ActionTypes = 'LOCALE_CHANGED'
export type LocaleKinds = 'en-US' | 'uk-UA'
type Action = { type: ActionTypes; payload: { locale: LocaleKinds } }
type IntlState = { locale: LocaleKinds }

//@ts-ignore
export const AppContext = createContext<{
  state: IntlState
  dispatch: React.Dispatch<Action>
}>()

const initialState: IntlState = {
  locale: 'en-US',
}

const reducer = (state: IntlState, action: Action): IntlState => {
  switch (action.type) {
    case 'LOCALE_CHANGED':
      localStorage.setItem('locale', action.payload.locale)
      return {
        ...state,
        locale: action.payload.locale,
      }
    default:
      return state
  }
}

const locales = {
  ENGLISH: 'en-US',
  UKRAINE: 'uk-UA',
}
const messages = {
  'en-US': {
    films: 'Films',
    recommendations: 'Recommendations',
    login: 'Login',
    locale: 'Locale',
    emptyList: "There's nothing now",
    createList: 'Create movie list',
    copied: 'Link was copied successfully',
    fform: 'Filter Form',
    adult: 'Adult?',
    submit: 'Submit',
  },
  'uk-UA': {
    films: 'Фільми',
    recommendations: 'Рекомендації',
    login: 'Ввійти',
    locale: 'Мова',
    emptyList: 'Поки-що тут нічого немає',
    createList: 'Створіть список фільмів',
    copied: 'Посилання успішно скопійовано',
    fform: 'Форма фільтрації',
    adult: 'Повнолітній?',
    submit: 'Застосувати',
  },
}

const AppIntlProvider: React.FC<{ children: React.ReactNode | React.ReactElement }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <AppContext.Provider value={value}>
      <IntlProvider
        messages={messages[state.locale]}
        locale="en-US"
        defaultLocale={locales.ENGLISH}>
        {children}
      </IntlProvider>
    </AppContext.Provider>
  )
}

export default AppIntlProvider
