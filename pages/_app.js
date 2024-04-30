import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import PlausibleProvider from 'next-plausible'

export default function Nextra({ Component, pageProps }) {
    return (
        <PlausibleProvider domain="blog.npi.ai">
            <>
                <Head>
                    {/*<link*/}
                    {/*  rel="alternate"*/}
                    {/*  type="application/rss+xml"*/}
                    {/*  title="RSS"*/}
                    {/*  href="/feed.xml"*/}
                    {/*/>*/}
                    <link
                        rel="preload"
                        href="/fonts/Inter-roman.latin.var.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                </Head>
                <Component {...pageProps} />
            </>
        </PlausibleProvider>
    )
}
