import { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/css/global.css';


function MyApp({ Component, pageProps }: AppProps ) {
    return (
        <>
            <Head>
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=UA-158754763-1`}
                />
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-158754763-1');
                    `,
                    }}
                />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <link rel="icon" type="image/x-con" href="/images/pg55_logo_l.png" />
                <title>Pangea55</title>
                <meta
                    property="og:image"
                    content="http://pangea55.com/pg55_logo_l.png"
                />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="315" />
                <meta property="og:url" content="http://www.pangea55.com" />
                <meta property="og:title" content="Pangea55" />
                <meta name="keyword" content="pangea55" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;