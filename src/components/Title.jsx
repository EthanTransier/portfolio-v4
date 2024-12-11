'use client'
import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
/* The following plugin is a Club GSAP perk */
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


// gsap.registerPlugin(useGSAP, MorphSVGPlugin);
const Title = () => {
  const router = useRouter()
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
        duration: 0.2
      })
      // gsap.to(`#hl${num}-1`, {
      //   width: '100vw',
      //   ease: 'none',
      //   duration: 0.18
      // })
      // gsap.to(`#hl${num}-2`, {
      //   width: '100vw',
      //   ease: 'none',
      //   duration: 0.16
      // })
      // gsap.to(`#hl${num}-3`, {
      //   width: '100vw',
      //   ease: 'none',
      //   duration: 0.14
      // })
      // gsap.to(`#hl${num}-4`, {
      //   width: '100vw',
      //   ease: 'none',
      //   duration: 0.12
      // })
  }

  function removeHighlight(num){
    gsap.to(`#hl${num}`, {
      width: '0vw',
      ease: 'none',
      duration: 0.1
    })
  }

  function switchPage(num){
    if(num == 1){
      gsap.timeline()
      .to('.main-title-container', {
        x: '-100vw',
        ease: 'power3.in',
        duration: 0.35
      })
      .call(() => {
        router.push('/about');
      })
      gsap.to('#link1', {
        x: '100vw',
        ease: 'power3.in',
        duration: 0.35
      })
      
    }
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
            <div className="socials">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
            </div>
            <div className="title link" onMouseEnter={() => highlightLink(1)} onMouseLeave={() => removeHighlight(1)} onClick={() => switchPage(1)}>
              <div></div>
              <div className="highlight" id='hl1'></div>
              {/* <div className="highlight highlight-1" id='hl1-1'></div>
              <div className="highlight highlight-2" id='hl1-2'></div>
              <div className="highlight highlight-3" id='hl1-3'></div>
              <div className="highlight highlight-4" id='hl1-4'></div> */}
              <h1 id='link1'>about</h1>
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