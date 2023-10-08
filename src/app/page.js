import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jamie's blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/page.module.css" />
      </Head>
      <body>
        {/*Title Banner*/}
        <div className={styles.main}>
          <h1>Title</h1>
        </div>
        {/*Menu to hold button and button for about me page*/}
        <div className={styles.menu}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        {/*3x2 Grid for cards*/}
        <div className={styles.grid}>
          <div className="col-md-4">
            <div class={styles.box}>
              box1
              <Image 
                src="/public.stardew.jpg"
                width={230}
                height={230}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              box2
              <Image></Image>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              box3
              <Image></Image>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              box4
              <Image></Image>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              box5
              <Image></Image>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.box}>
              box6
              <Image></Image>
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