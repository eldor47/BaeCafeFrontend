import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { CLOUDFRONT_IMG } from 'components/helper';

interface DocumentProps {
  urlProps: any;
}
export default class MyDocument extends NextDocument<DocumentProps>  {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const url = ctx.req?.url ? ctx.req.url : '';
    let urlImage = `${CLOUDFRONT_IMG}/image/mekabae.png`;
    if(url.includes('/s1')){
      urlImage = `${CLOUDFRONT_IMG}/image/bae_card.png`;
    }
    let urlProps = {url: urlImage};

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        urlProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const { urlProps } = this.props;
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href={`${CLOUDFRONT_IMG}/season2/font/CONSOLA.woff2`}
            as="style"
            crossOrigin="anonymous"/>
          <link
            rel="preload"
            href={`${CLOUDFRONT_IMG}/season2/font/CONSOLAB.woff2`}
            as="style"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
            />
          </noscript>
          <link rel="prefetch" href={`${CLOUDFRONT_IMG}/season2/collection/poster2.jpeg`} as="image" />
          <link rel="preload" href={`${CLOUDFRONT_IMG}/season2/logo/season2-logo.png`} as="image" />
          <link rel="preload" href={`${CLOUDFRONT_IMG}/season2/button/connect-btn.png`} as="image" />
          <link rel="preload" href={`${CLOUDFRONT_IMG}/season2/button/connect-btn-hover.png`} as="image" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            data-hid="twitter:title"
            name="twitter:title"
            property="twitter:title"
            content="BaeCafe"
          />
          <meta
            data-hid="twitter:description"
            name="twitter:description"
            property="twitter:description"
            content="BaeCafe | Booba is life, Booba is culture"
          />
          <meta
            data-hid="twitter:image"
            name="twitter:image"
            property="twitter:image"
            content={urlProps.url}
          />
          <meta
            data-hid="twitter:image:alt"
            name="twitter:image:alt"
            property="twitter:image:alt"
            content="BaeCafe"
          />
          <meta
            data-hid="og:title"
            name="og:title"
            property="og:title"
            content="BaeCafe"
          />
          <meta
            data-hid="og:description"
            name="og:description"
            property="og:description"
            content="BaeCafe | Booba is life, Booba is culture"
          />
          <meta
            data-hid="og:image"
            name="og:image"
            property="og:image"
            content={urlProps.url}
          />
          <meta
            data-hid="og:image:secure_url"
            name="og:image:secure_url"
            property="og:image:secure_url"
            content={urlProps.url}
          />
          <meta
            data-hid="og:image:alt"
            name="og:image:alt"
            property="og:image:alt"
            content="BaeCafe"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
