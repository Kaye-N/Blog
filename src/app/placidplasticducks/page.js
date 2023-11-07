import React from 'react';
import Link from 'next/link';

export default function PlasticDucks() {
    return (
      <>
          <title>Jamie's blog</title>
          <meta name="application-name" content="Next.js" />
          <link rel="author" href="https://Bonniefied.com/aboutme" />
          <meta description = 'Blogsite for personal use'/>
  
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico"/>
        <body>
          <div>
            <h1>Plastic Placid Ducks!</h1>
          </div>
          <div className='home button'>
            <Link href="/">Home</Link>
          </div>
        </body>
      </>
    );
}