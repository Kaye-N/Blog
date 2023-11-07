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
        {/*Title Banner*/}
        <div className={styles.title}>
          <h1 id='scrollT'>Welcome to Jamie's Reviews</h1>
        </div>
        {/*Menu to hold button and button for about me page*/}
        <div className={styles.menu}>
          Welcome to the homepage of my game reviews! Below are games that I
          have give hours of my time to just because... I like them. If you're more curious about me
          you can go to my About Me!
          <br/>
          <Link href="/about">
          <button className={styles.AMbutton}>
            <h5>
              About Me
            </h5>
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
            <Link style= {layout.bannerTitle} href="/placidplasticducks">
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
                src=""
                width={239}
                height={238}
                alt='' 
              />
            </div>
            <div className={styles.bottomC} id='game'>
            <h3>Placeholder</h3>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Lorem Ipsum</p>
        </div>
      </body>
    </>
  );
}