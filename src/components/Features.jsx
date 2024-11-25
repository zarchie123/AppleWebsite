import React, { useRef } from 'react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import { useGSAP } from '@gsap/react';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const Features = () => {
  const VideoRef = useRef()

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        VideoRef.current.play();
      }
    })
    
    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );

    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Explore the full story.</h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className='mt-32 mb-23 pl-24'>
            <h2 className="text-5xl lg:text-7xl font-semibold">Iphone</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Forged with Iron</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relatvie h-[50vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={VideoRef}>
                <source src={exploreVideo} type="video/mp4"></source>
              </video>
              </div>

              <div className="flex flex-col w-full relative">
                <div className="feature-video-container">
                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                  </div>

                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={explore2Img} alt="titanium2" className="feature-video g_grow" />
                  </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    IPhone 15 pro {' '}
                    <span className="text-white">
                    boasts an advanced camera system, featuring ultra-wide lenses that deliver stunningly detailed and expansive shots, perfect for capturing breathtaking landscapes or group photos. 
                    </span>,
                    Its innovative design pushes the boundaries of mobile photography, ensuring unparalleled quality and versatility in every frame.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    IPhone 15 pro {' '}
                    <span className="text-white">
                    features a sleek, modern design that combines elegance with functionality
                    </span>,
                    Its refined edges, lightweight build, and premium materials create a sophisticated look, while its ergonomic form ensures a comfortable grip and effortless handling.
                  </p>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Features