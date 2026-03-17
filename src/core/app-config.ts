export const appConfig: AppConfig = {
  apiURL: import.meta.env.VITE_API_URL,
  apiKey: import.meta.env.VITE_API_KEY,
  currencyFrom: import.meta.env.VITE_DEFAULT_CURRENCY_FROM,
  currencyTo: import.meta.env.VITE_DEFAULT_CURRENCY_TO,
} as const

type AppConfig = {
  apiURL: string
  apiKey: string
  currencyFrom: string
  currencyTo: string
}
