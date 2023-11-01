import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from './page.module.css';
import animation from './animations.css'
import layout from './homepage.js'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jamie's blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/page.module.css" />

        <script src='homepage.js'/>
      </Head>
      <body >
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
          <button className={styles.AMbutton}>
            <h5>
             <Link href="/">About Me</Link>
            </h5>
          </button>
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
            <div className={styles.bottomC} id='ducks'>
              <h3>
                Plastic Placid Ducks
                <Link style= {layout.bannerTitle} href="src\app\games\plasticducks.js">You like floating?</Link>
              </h3>
            </div>
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
              placeholder
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