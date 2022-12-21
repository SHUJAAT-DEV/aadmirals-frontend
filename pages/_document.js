import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="en-US">
                <Head >

                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                    <meta name="theme-color" content="#000000" />

                    <link rel="apple-touch-icon" href="/logo192.png" />

                    <link rel="manifest" href="/manifest.json" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
                        rel="stylesheet"
                    />
                    
                    <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />

                    <meta name="ahrefs-site-verification" content="81fd263352cf2c288d1cb240c3109f64c890adf1e571d1bb062cc243dc97691f" />

                    {/* Canonical */}

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />

                    <script dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer ||[];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-QB6LC1GJEH');`

                    }}
                    async
                    />
                    <meta name="google-site-verification" content="kpO7f0SwRMHk7xD5nQt4lWst63p3iVMFIB9tc0pymfA" />
                    <meta name="google-site-verification" content="vBqJ55AQ09W0X-pj39SA53406lCKVvOh7WcJh18P3I0" />
                    <meta name="msvalidate.01" content="AFE22B83293CEE8BF906D174601929C7" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106158068-1"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `  window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'UA-106158068-1');`
                        }}
                        async
                    />


                </Head>
                <body>
                    {/* <noscript><iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NTZGRPW"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe></noscript> */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106158068-1"></script>
                    <script src="https://www.paypalobjects.com/api/checkout.js" async></script>
                    <script src="https://js.braintreegateway.com/web/dropin/1.25.0/js/dropin.js" async></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-106158068-1');
`}} async
                    ></script>

                    <script
                        src="https://kit.fontawesome.com/b1c6d9876c.js"
                        crossOrigin="anonymous"
                        async
                    ></script>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlfzQsZBUkimGvH80z80i8I-P6UwidPSU&libraries=places" ></script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QB6LC1GJEH"></script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QB6LC1GJEH"></script>


                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument