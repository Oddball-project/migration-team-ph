import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* favicon begin */}
          <link rel="apple-touch-icon" sizes="76x76" href="favicon/pantheon-logo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/pantheon-logo.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/pantheon-logo.png" />
          <link rel="manifest" href="favicon/site.webmanifest" />
          <link rel="mask-icon" href="favicon/pantheon-logo.png" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* favicon */}

          {/* public assets begin */}
          <link rel="stylesheet" href="css/plugins/bootstrap-grid.css" />
          <link rel="stylesheet" href="css/plugins/font-awesome.min.css" />
          <link rel="stylesheet" href="css/plugins/swiper.min.css" />  
          {/* public assets end */}
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
