import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '@components/layout/Layout'
import { OrbisProvider } from '@components/OrbisProvider'
import { PrivyClientProvider } from '@components/PrivyClientProvider'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import { lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { env } from '@shared/environment'
import { chains, wagmiClient } from '@shared/wagmiClient'
import GlobalStyles from '@styles/GlobalStyles'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Toaster } from 'react-hot-toast'
import { theme } from 'twin.macro'
import { WagmiConfig } from 'wagmi'
import '../styles/css/commentModal.css'
import '../styles/css/forum.css'
import '../styles/css/main.css'

// Router Loading Animation with @tanem/react-nprogress
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* SEO TODO */}
      <DefaultSeo
        dangerouslySetAllPagesToNoFollow={!env.isProduction}
        dangerouslySetAllPagesToNoIndex={!env.isProduction}
        defaultTitle="Debate3.xyz"
        titleTemplate="%s | Debate3"
        description="Decentralized, token-gated discussion platform for DAOs"
        openGraph={{
          type: 'website',
          locale: 'en',
          url: env.url,
          site_name: 'Debate3.xyz',
          images: [
            {
              url: `${env.url}/og/og.jpg`,
              width: 1200,
              height: 670,
            },
          ],
        }}
        twitter={{
          handle: '@debate31',
        }}
      />

      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <CacheProvider value={cache}>
        <GlobalStyles />

        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={lightTheme({
              accentColor: theme`colors.brandblue`,
              borderRadius: 'medium',
            })}
          >
            <PrivyClientProvider>
              <OrbisProvider>
                <ChakraProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ChakraProvider>
              </OrbisProvider>
            </PrivyClientProvider>
          </RainbowKitProvider>
        </WagmiConfig>

        <Toaster
          toastOptions={{
            style: {
              fontWeight: '600',
            },
          }}
        />
      </CacheProvider>
    </>
  )
}

export default MyApp
