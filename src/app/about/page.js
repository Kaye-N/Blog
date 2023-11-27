import '../globals.css';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <title>Jamie's blog</title>
      <meta name="application-name" content="Next.js" />
      <link rel="author" href="https://Bonniefied.com/aboutme" />
      <meta description='Blogsite for personal use' />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <body id='background'>
        <div className={styles.homeButton}>
          <h1>About Me</h1>
        </div>

        <div className={styles.about1}>
          <Image
            src='/sdvsitting.jpg'
            width={700}
            height={300}
            alt='stardew top image'
          /><br></br>
          About Me
        </div>
        <div className={styles.about2}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p> <br></br><br></br>
          <p>⊹˚₊‧───────────────‧₊˚⊹⊹˚₊‧───────────────‧₊˚⊹</p>
        </div>
        <footer>
          <div>
            <div className="container p-4">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Welcome to the bottom of the page</h5>
                  <p>
                    <Link href="/">Home</Link> &nbsp;&nbsp;&nbsp;
                    <Link href="/about">About Me</Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">//</h5>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}