import React from 'react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import { useGSAP } from '@gsap/react';

const Features = () => {
  useGSAP(() => {
    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Explore the full story.</h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className='mt-32 mb-23 pl-24'>
            <h2 className="text-5xl lgtext-7xl font-semibold">Iphone</h2>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Features