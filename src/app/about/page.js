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
        <div className={styles.homeButton}>
          <h1>About Me</h1>
        </div>
        <div>

        </div>
        <div>
          <h1>Home</h1>
        </div>
      </body>
    </>
  );
}
