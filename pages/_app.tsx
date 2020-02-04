import { AppProps } from 'next/app';
import '../static/css/global.css';

function MyApp({ Component, pageProps }: AppProps ) {
    return <Component {...pageProps}
}

export default MyApp;