import './globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import layout from './homepage.js';
import animations from './animations.css'

export const metadata = {
  title: 'My Page Title',
}

export default function Page() {
  return (
    <>
        <title>Jamie's blog</title>
        <meta name="application-name" content="Next.js" />
        <link rel="author" href="https://Bonniefied.com" />
        <meta description = 'Blogsite for personal use'/>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="/page.module.css" />
        <link rel="about page" href='/about'/>

        <script src='homepage.js'/>
      <body>
        <div id='container'>
          <div id='content-wrap'>
                {/*Title Banner*/}
            <div className={styles.title}>
              <h1 id='scrollT'>Welcome to BonnieRev!          Bonnified Reviews</h1>
            </div>
            {/*Menu to hold button and button for about me page*/}
            <div className={styles.menu}>
              <p>
                Welcome to the homepage of my game reviews! Below are games that I
                have give hours of my time to just because... I like them. If you're more curious about me
                you can go to my About Section!
              </p>
              <br/>
              <Link href="/about">
              <button className={styles.AMbutton}>
                <h2>
                  About Me
                </h2>
              </button>
              </Link>
            </div>
            {/*3x2 Grid for cards*/}
            <div className={styles.grid}>
              <div className="col-md-4">
                <div className={styles.box}>
                  <Image
                    src="/sdvsitting.jpg"
                    width={239}
                    height={238}
                    alt='sdv art'
                  />
                </div>
                <div className={styles.bottomC} id="sdv">
                  <h3>Stardew Valley</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.box}>
                  <Image
                    src="/phasmophobia.jpg"
                    width={239}
                    height={238}
                    alt='phasmo art'
                  />
                </div>
                <div className={styles.bottomC} id='phasmo'>
                  <h3>Phasmophobia</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.box}>
                  <Image
                    src="/animalcrossing.jpg"
                    width={239}
                    height={238}
                    alt='animal crossing art'
                  />
                </div>
                <div className={styles.bottomC} id="animals">
                  <h3>Animal Crossing</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.box}>
                  <Image
                    src="/plasticduck.jpg"
                    width={239}
                    height={238}
                    alt='plastic duck'
                  />
                </div>
                <Link href="/placidplasticducks">
                  <div className={styles.bottomC} id='ducks'>
                    <h3>Plastic Placid Ducks</h3>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <div className={styles.box}>
                  <Image
                    src="/tetrisicon.jpg"
                    width={239}
                    height={238}
                    alt='tetris'
                  />
                </div>
                <div className={styles.bottomC} id='tetris'>
                  <h3>Tetris</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.box}>
                  <Image
                    src="/musedash.jpg"
                    width={239}
                    height={238}
                    alt='Muse Dash '
                  />
                </div>
                <div className={styles.bottomC} id='game'>
                <h3>Muse Dash</h3>
                </div>
              </div>
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