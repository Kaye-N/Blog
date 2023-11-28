import './globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import layout from './homepage.js';
import animations from './animations.css'

export default function Page() {
  return (
    <>
      <title>Jamie's blog</title>
      <meta name="application-name" content="Next.js" />
      <link rel="author" href="https://Bonniefied.com" />
      <meta description='Blogsite for personal use' />

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/page.module.css" />
      <link rel="about page" href='/about' />

      <script src='homepage.js' />
      <body id='background'>
        {/*Title Banner*/}
        <div className={styles.title}>
          <h1 id='scrollT'>This is not a Drill! &nbsp;&nbsp;&nbsp; Someone is actually here!</h1>
        </div>
        <div className={styles.gradient}>
        </div>
        {/*Menu to hold button and button for about me page*/}
        <div className={styles.menu}>
          <p>
            Welcome to the homepage of my game reviews! Below are games that I
            have give hours of my time to just because... I like them. If you're more curious about me
            you can go to my About Section!
          </p>
          <br />
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
            <Link href='/stardewvalley'>
              <div className={styles.box}>
                <Image
                  src="/sdvhome.png"
                  width={239}
                  height={238}
                  alt='sdv art'
                />
              </div>
              <div className={styles.bottomC} id="sdv">
                <h4>Stardew&nbsp;Valley</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href='/phasmophobia'>
              <div className={styles.box}>
                <Image
                  src="/phasmophobia.jpg"
                  width={239}
                  height={238}
                  alt='phasmo art'
                />
              </div>
              <div className={styles.bottomC} id='phasmo'>
                <h4>Phasmophobia</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href='/animalcrossing'>
              <div className={styles.box}>
                <Image
                  src="/animalcrossing.jpg"
                  width={239}
                  height={238}
                  alt='animal crossing art'
                />
              </div>
              <div className={styles.bottomC} id="animals">
                <h4>Animal&nbsp;Crossing</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="/placidplasticducks">
              <div className={styles.box}>
                <Image
                  src="/plasticduck.jpg"
                  width={239}
                  height={238}
                  alt='plastic duck'
                />
              </div>
              <div className={styles.bottomC} id='ducks'>
                <h4>Plastic&nbsp;Placid Ducks</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href='/tetris'>
              <div className={styles.box}>
                <Image
                  src="/tetrisicon.jpg"
                  width={239}
                  height={238}
                  alt='tetris'
                />
              </div>
              <div className={styles.bottomC} id='tetris'>
                <h4>Tetris</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href='/musedash'>
              <div className={styles.box}>
                <Image
                  src="/musedash.jpg"
                  width={239}
                  height={238}
                  alt='Muse Dash '
                />
              </div>
              <div className={styles.bottomC} id='game'>
                <h4>Muse&nbsp;Dash</h4>
              </div>
            </Link>
          </div>
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