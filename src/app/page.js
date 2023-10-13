import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jamie's blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/page.module.css" />
      </Head>
      <body>
        {/*Title Banner*/}
        <div className={styles.title}>
          <h1>Title Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
        </div>
        {/*Menu to hold button and button for about me page*/}
        <div className={styles.menu}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        {/*3x2 Grid for cards*/}
        <div className={styles.grid}>
          <div className="col-md-4">
            <div class={styles.box}>
              <Image
                src="/sdvsitting.jpg"
                width={210}
                height={205}
                alt='sdv art'
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              <Image
                src="/phasmophobia.jpg"
                width={210}
                height={210}
                alt='phasmo art'
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              <Image
                src="/animalcrossing.jpg"
                width={210}
                height={210}
                alt='animal crossing art'
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              box4
              <Image/>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              <Image/>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              box6
              <Image/>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Bottom stuff</p>
        </div>
      </body>
    </>
  );
}