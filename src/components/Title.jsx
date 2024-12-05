'use client'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
/* The following plugin is a Club GSAP perk */
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


// gsap.registerPlugin(useGSAP, MorphSVGPlugin);
const Title = () => {
  // morph the title from one font style to another with the use of SVGs
  useGSAP(
    () => {
      // MorphSVGPlugin.convertToPath('#h1')
      // MorphSVGPlugin.convertToPath('#h2')
      // gsap.to("#h1", { duration: 1, morphSVG: {shape: "#h2"} });
      gsap.timeline()
      .to('#indent', {
        x: '-5vw',
        duration: 0
      })
      gsap.timeline()
      .to('#titles', {
        y: '-1000vh',
        ease: "power3.out",
        duration: 1.5
      })
      .to("#indent", {
        x: 0, 
        ease: 'power3.in',
        duration: 0.25
      })
      // .to('#blocker', {
      //   y: '-100vh',
      //   duration: 0
      // })
      // .to('#blocker', {
      //   y: -100 * (1/6) + 'vh',
      //   duration: 0.5
      // })
    }
  )
  const titleCount = 10;

  function highlightLink(num){
      gsap.to(`#hl${num}`, {
        width: '100vw',
        ease: 'none',
        duration: 0.1
      })
  }

  function removeHighlight(num){
    gsap.to(`#hl${num}`, {
      width: '0vw',
      ease: 'none',
      duration: 0.1
    })
  }

  return (
    <>
      {Array.from({ length: titleCount }).map((_, index) => (
        <div key={index} className="title-container" id="titles">
          <div className='title'>
            <h1>ethan</h1>
            <h1>transier</h1>
          </div>
          <div className='title'>
            <h1>ethan</h1>
            <h1>transier</h1>
          </div>
          <div className='title'>
            <h1>ethan</h1>
            <h1>transier</h1>
          </div>
          <div className='title'>
            <h1>ethan</h1>
            <h1>transier</h1>
          </div>
          <div className='title'>
            <h1>ethan</h1>
            <h1>transier</h1>
          </div>
          <div className='title'>
            <h1>ethan</h1>
            <h1>transier</h1>
          </div>
        </div>
      ))}
      <div className="title-container main-title-container" id="titles">
          <section className="home">
            <div className="title link" onMouseEnter={() => highlightLink(1)} onMouseLeave={() => removeHighlight(1)}>
              <div></div>
              <div className="highlight" id='hl1'></div>
              <h1>about</h1>
            </div>
             <div className="title link" onMouseEnter={() => highlightLink(2)} onMouseLeave={() => removeHighlight(2)}>
              <div></div>
              <div className="highlight" id='hl2'></div>
              <h1>projects</h1>
            </div>
             <div className="title link" onMouseEnter={() => highlightLink(3)} onMouseLeave={() => removeHighlight(3)}>
              <div></div>
              <div className="highlight" id='hl3'></div>
              <h1>contact</h1>
            </div>
          </section>
          <div className='title indent-title'>
            <h1>ethan</h1>
            <h1 id='indent'>transier</h1>
          </div>
        </div>
    </>
    
  )
}

export default Title