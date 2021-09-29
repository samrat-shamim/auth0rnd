import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }: AppProps) {
  return <Auth0Provider
    domain={process.env.AUTH0_CUSTOM_DOMAIN || ''}
    clientId={process.env.AUTH0_CLIENT_ID || ''}
    redirectUri={process.env.AUTH0_BASE_URL || ""}
    issuer={process.env.AUTH0_ISSUER_BASE_URL || ""}
    audience={process.env.AUTH0_AUDIENCE || ""}
    cacheLocation="localstorage">
    <Component {...pageProps} />
  </Auth0Provider>
}
export default MyApp
