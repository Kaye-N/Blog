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
          <div className={styles.title}>
            My name is Jamie
          </div>
        </div>
        <div className={styles.about2}>
          <div>
            <Image
              src='/aboutmehero.jpg'
              width={850}
              height={400}
              alt='stardew top image'
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p> 
          <div className={styles.decoration}>
            <p>⊹˚₊‧────────────────────‧₊˚⊹⊹˚₊‧─────────────────────‧₊˚⊹</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p> 
        </div>
        <footer>
          <div id='footerBG'>
            <div className="container p-4">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">If you want to know more about me...</h5>
                  <p>
                    <Link href='https://discord.com/'>
                      <Image
                        src='/discordicon.svg'
                        width={50}
                        height={35}
                        alt='discord icon'
                      />
                    </Link>
                    <Link href='https://www.instagram.com/'>
                      <Image
                        src='/instagramicon.svg'
                        width={50}
                        height={35}
                        alt='instagram icon'
                      />
                    </Link>
                    <Link href='https://twitter.com/home'>
                      <Image
                        src='/twittericon.svg'
                        width={50}
                        height={35}
                        alt='twitter icon'
                      />
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">placeholderemail@gmail.com</h5>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}