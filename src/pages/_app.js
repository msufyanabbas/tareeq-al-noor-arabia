// src/pages/_app.js
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { LanguageProvider } from '../contexts/LanguageContext'

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  )
}

export default MyApp;