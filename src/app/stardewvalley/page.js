import '../globals.css';
import React from 'react';
import Link from 'next/link';

export default function PlasticDucks() {
    return (
      <>
          <title>Jamie's blog</title>
          <meta name="application-name" content="Next.js" />
          <link rel="author" href="https://Bonniefied.com/aboutme"/>
          <meta description = 'Blogsite for personal use'/>
  
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico"/>
        <body>
          <div className=''>
            <h1>Stardew Valley</h1>
          </div>
          <div className='home button'>
            <Link href="/">Home</Link>
          </div>
          <footer>
          <div>
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
          </footer>
        </body>
      </>
    );
}