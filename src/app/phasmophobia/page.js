import '../globals.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import style from '../reviewlayout.css'

export default function Phasmophobia() {
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
        <div>
          <div id='bannerBG'>
          </div>
        </div>
        <div id='gradient'>
        </div>
        {/*Box for main content*/}
        <div id='boxBG'>
          <div id='decoration'>
            <p>⊹˚₊‧───────────────────────‧₊˚⊹⊹˚₊‧────────────────────────‧₊˚⊹</p>
          </div>
          <div id='hero'>
            <Image
              src='/phasmohero.jpg'
              width={850}
              height={450}
              style={style.images}
              alt='phasmo top image'
            />
          </div>
          <div id='title'>
            <h1>Phasmophobia</h1>
          </div>
          <div className={style.paragraph}>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Consectetur lorem donec massa sapien faucibus et. Felis eget nunc lobortis mattis aliquam faucibus purus in massa.
              Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Varius morbi enim nunc faucibus a pellentesque sit. Facilisi cras fermentum odio eu. Et netus et malesuada fames. Ut ornare lectus sit amet est placerat in egestas. Feugiat in ante metus dictum at tempor commodo ullamcorper.
              Sagittis vitae et leo duis ut diam quam nulla.
            </h4>
            <div id='hero'>
              <Image
                src='/phasmogame.jpg'
                width={880}
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
            <div id='decoration'>
              <p>⊹˚₊‧───────────────────────‧₊˚⊹⊹˚₊‧────────────────────────‧₊˚⊹</p>
            </div>
            <div className={style.paragraph}>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Consectetur lorem donec massa sapien faucibus et. Felis eget nunc lobortis mattis aliquam faucibus purus in massa.
                Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Varius morbi enim nunc faucibus a pellentesque sit. Facilisi cras fermentum odio eu. Et netus et malesuada fames. Ut ornare lectus sit amet est placerat in egestas. Feugiat in ante metus dictum at tempor commodo ullamcorper.
                Sagittis vitae et leo duis ut diam quam nulla. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Cras tincidunt lobortis feugiat vivamus. Non diam phasellus vestibulum lorem sed risus ultricies.
                Massa tempor nec feugiat nisl pretium fusce id. In ornare quam viverra orci sagittis eu volutpat. Nunc id cursus metus aliquam eleifend mi in. Nunc faucibus a pellentesque sit amet porttitor eget. Erat velit scelerisque in dictum non consectetur.
                Ac orci phasellus egestas tellus. Purus non enim praesent elementum.

                Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Cras tincidunt lobortis feugiat vivamus. Non diam phasellus vestibulum lorem sed risus ultricies.
                Massa tempor nec feugiat nisl pretium fusce id. In ornare quam viverra orci sagittis eu volutpat. Nunc id cursus metus aliquam eleifend mi in. Nunc faucibus a pellentesque sit amet porttitor eget. Erat velit scelerisque in dictum non consectetur.
                Ac orci phasellus egestas tellus. Purus non enim praesent elementum.
              </h4>
            </div>
            <div id='hero'>
              <Image
                src='/phasmotools.jpg'
                width={880}
                height={450}
                alt='stardew gameplay image'
              />
            </div>
            <div className={style.paragraph}>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Consectetur lorem donec massa sapien faucibus et. Felis eget nunc lobortis mattis aliquam faucibus purus in massa.
                Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Varius morbi enim nunc faucibus a pellentesque sit. Facilisi cras fermentum odio eu. Et netus et malesuada fames. Ut ornare lectus sit amet est placerat in egestas. Feugiat in ante metus dictum at tempor commodo ullamcorper.
                Sagittis vitae et leo duis ut diam quam nulla.
              </h4>
            </div>
            <div id='decoration'>
              <p>⊹˚₊‧───────────────────────‧₊˚⊹⊹˚₊‧────────────────────────‧₊˚⊹</p>
            </div>
          </div>
        </div>

        {/*Bottom Portion of webpage*/}
        <div id='bottomBox' className={style.boxDecor}>
          <div id='flex'>
            <div className={style.item}><Link href="/"><p>Home</p></Link></div>
            <div className={style.item}><Link href="/about"><p>&nbsp;About Me</p></Link></div>
            <div className={style.item}><p>Next</p></div>
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