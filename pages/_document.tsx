import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
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
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' href='/favicon.ico' />
          <meta property='og:title' content='박소영 Frontend Developer' />
          <meta property='og:image' content='/og.png' />
          <meta property='og:description' content="Frontend Developer soo's Protfolio" />
          <meta property='og:url' content='#' />
          <meta property='og:type' content='website' />
          <meta
            name='keywords'
            content='프론트엔드 박소영, 프론트엔드, 개발자 박소영, sso214, sso, 소영, park so young, SSO, SSO214'
          />
          <meta name='description' content="Frontend Developer soo's Protfolio" />
          <meta name='theme-color' content='#000000' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap'
            rel='stylesheet'
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

export default MyDocument;
