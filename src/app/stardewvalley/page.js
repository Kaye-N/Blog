import '../globals.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import style from '../reviewlayout.css'

export default function StardewValley() {
  return (
    <>
      <title>Jamie's blog</title>
      <meta name="application-name" content="Next.js" />
      <link rel="author" href="https://Bonniefied.com/aboutme" />
      <meta description='Blogsite for personal use' />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <div className={style.boxDecor}>
          <div id='bannerBG'>
          </div>
        </div>
        <div id='gradient'>
        </div>
        {/*Box for main content*/}
        <div id='boxBG' className={style.boxDecor}>
          <div className={style.decoration}>
            <p>⊹˚₊‧────────────────────‧₊˚⊹⊹˚₊‧─────────────────────‧₊˚⊹</p>
          </div>
          <div id='hero'>
            <Image
              src='/sdvsitting.jpg'
              width={840}
              height={400}
              style={style.images}
              alt='stardew top image'
            />
          </div>
          <div id='title'>
            <h1>Stardew Valley</h1>
          </div>
          <div className={style.paragraph}>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Consectetur lorem donec massa sapien faucibus et. Felis eget nunc lobortis mattis aliquam faucibus purus in massa.
              Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Varius morbi enim nunc faucibus a pellentesque sit. Facilisi cras fermentum odio eu. Et netus et malesuada fames. Ut ornare lectus sit amet est placerat in egestas. Feugiat in ante metus dictum at tempor commodo ullamcorper.
              Sagittis vitae et leo duis ut diam quam nulla.
            </h4>
            <div id='gameplay'>
              <Image
                src='/sdvgame.png'
                width={950}
                height={450}
                alt='stardew gameplay image'
              />
            </div>
            <div className={style.paragraph}>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Consectetur lorem donec massa sapien faucibus et. Felis eget nunc lobortis mattis aliquam faucibus purus in massa.
                Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Varius morbi enim nunc faucibus a pellentesque sit. Facilisi cras fermentum odio eu. Et netus et malesuada fames. Ut ornare lectus sit amet est placerat in egestas. Feugiat in ante metus dictum at tempor commodo ullamcorper.
                Sagittis vitae et leo duis ut diam quam nulla. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Cras tincidunt lobortis feugiat vivamus. Non diam phasellus vestibulum lorem sed risus ultricies.
                Massa tempor nec feugiat nisl pretium fusce id. In ornare quam viverra orci sagittis eu volutpat. Nunc id cursus metus aliquam eleifend mi in. Nunc faucibus a pellentesque sit amet porttitor eget. Erat velit scelerisque in dictum non consectetur.
                Ac orci phasellus egestas tellus. Purus non enim praesent elementum.
              </h4>
            </div>
          </div>
        </div>
        {/*Bottom Portion of webpage*/}
        <div id='bottomBox' className={style.boxDecor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Consectetur lorem donec massa sapien faucibus et. Felis eget nunc lobortis mattis aliquam faucibus purus in massa.
          Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Varius morbi enim nunc faucibus a pellentesque sit. Facilisi cras fermentum odio eu. Et netus et malesuada fames. Ut ornare lectus sit amet est placerat in egestas. Feugiat in ante metus dictum at tempor commodo ullamcorper.
          Sagittis vitae et leo duis ut diam quam nulla. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Cras tincidunt lobortis feugiat vivamus. Non diam phasellus vestibulum lorem sed risus ultricies.
          Massa tempor nec feugiat nisl pretium fusce id. In ornare quam viverra orci sagittis eu volutpat. Nunc id cursus metus aliquam eleifend mi in. Nunc faucibus a pellentesque sit amet porttitor eget. Erat velit scelerisque in dictum non consectetur.
          Ac orci phasellus egestas tellus. Purus non enim praesent elementum.
        </div>
        <footer>
          <div id='footerBG'>
            <div className="container p-4">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">If you want to know more about me...</h5>
                  <p>
                    <Link href="/">Home</Link>
                    <Link href="/about">&nbsp;About Me</Link>
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