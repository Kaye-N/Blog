import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function About() {
  return (
    <>
        <title>Jamie's blog</title>
        <meta name="application-name" content="Next.js" />
        <link rel="author" href="https://Bonniefied.com/aboutme" />
        <meta description = 'Blogsite for personal use'/>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="/page.module.css" />

        <script src='homepage.js'/>
      <body>
        <div>
          <h1>About Me</h1>
          <Link href='/'>About me</Link>
        </div>
      </body>
    </>
  );
}