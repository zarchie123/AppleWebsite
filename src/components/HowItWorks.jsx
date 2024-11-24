import React from 'react'
import { chipImg, frameImg, frameVideo} from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { animateWithGsap } from '../utils/animations'

const HowItWorks = () => {
  const videoRef = useRef();
    useGSAP(() => {
      gsap.from('#chip', {
        scrollTrigger: {
          trigger: '#chip',
          start: '20% bottom'
        },
        opacity: 0,
        scale: 2,
        duration: 2,
        ease: 'power2.inOut'
      })

      animateWithGsap(
        '.g_fadeIn',
        {y:0, opacity: 1,ease:'power2.inOut',duration: 1}
      )
    }, []);
  

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <div id="chip" className="flex-center w-full">
                <img src={chipImg} alt="chip" width={180} height={180} />
            </div>

            <div className="flex felx-col items-center">
                <h2 className="hiw-title">
                    A17 Pro Chip
                    <br /> A monsoter for gaming

                </h2>
                <p className="hiw-subtitle">
                    The Biggest Phone of something pero ayun nga wag niyo bilhin kasi ang pangit
                </p>
            </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
                <div className="hiw-video">
                    <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                     <source src= {frameVideo} type="video/mp4" />
                   </video>
                </div>
          </div>

          <p className="text-gray font-semibold text-center mt-3"> Valorant is a better game</p>

      
          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    iphone 15 pro is {' '}
                    <span className="text-white">
                      the iphone is something that you shouldn't buy because it is very maarte
                    </span>,
                    kaya dont buy the iphone they just keep pushing new features na di nmn need
                  </p>
                

                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    iphone 15 pro is {' '}
                    <span className="text-white">
                      its also has its own operating system kaya pangit 
                    </span>,
                    kaya dont buy the iphone they just keep pushing new features na di nmn need
                  </p>
                  </div>
                </div>

                <div className="flex-1 flex justify-center flex-col g_fadeIn">
                  <p className="hiw-text">New</p>
                  <p className="hiw-bigtext">Wew</p>
                  <p className="hiw-text">Now</p>
                </div>
                
              </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks