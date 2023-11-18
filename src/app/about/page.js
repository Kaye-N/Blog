import '../globals.css';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function About() {
  return (
    <>
        <title>Jamie's blog</title>
        <meta name="application-name" content="Next.js" />
        <link rel="author" href="https://Bonniefied.com/aboutme" />
        <meta description = 'Blogsite for personal use'/>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico"/>
      <body>
        <div id='container'>
          <div id='content-wrap'>
            <div className={styles.homeButton}>
              <h1>About Me</h1>
            </div>
            <div>

            </div>
            <div>
              <h1>Home</h1>
            </div>
            <footer>
              <div id='bottom-container'>
                <div id='content-wrap'>
                  <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Welcome to the bottom of the page</h5>
                                <p>
                                  <Link href="/">Home</Link> <Link href="/about">About Me</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">//</h5>
                        </div>
                    </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </>
  );
}
