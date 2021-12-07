import 'styles/globals.css'
import { appWithTranslation } from 'i18n'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'Components/Theme'
import { ProvideLang } from 'Components/Lang'
import { Layout } from 'Layouts'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import * as gtag from 'libs/gtag'
import ProvideAuth from 'Components/Auth/Providers/ProvideAuth'

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  function touchable() {
    const typedWindow = window || null
    const touchsupport =
      'ontouchstart' in typedWindow ||
      typedWindow.navigator.maxTouchPoints > 0 ||
      typedWindow.navigator.msMaxTouchPoints > 0
    const touchClass = touchsupport ? 'touch' : 'non-touch'

    if (document.documentElement) {
      document.documentElement.classList.add(touchClass)
    }
  }
  useEffect(() => {
    // Remove the server-side injected CSS.
    touchable()
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <Head>
        <title>{process.env.TITLE || 'Nextdash'}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="ashcan@3dln.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,, maximum-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <base href="/" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/site.webmanifest" />
        <link
          rel="mask-icon"
          href="assets/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="assets/favicon.ico"></link>
      </Head>
      <ProvideAuth>
        <ProvideLang>
          <ThemeProvider>
            <Layout>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </Layout>
          </ThemeProvider>
        </ProvideLang>
      </ProvideAuth>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
})

export default appWithTranslation(MyApp)
