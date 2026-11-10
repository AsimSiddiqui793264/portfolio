import mypic from '../assets/mypic.jpeg'
import Arrow from './Arrow.jsx'

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy" data-reveal="left">
        <p className="availability"><span /> OPEN TO OPPORTUNITIES</p>
        <p className="hero-greeting">Hey, I&apos;m <strong>Asim Siddiqui.</strong></p>
        <h1>
          I build for the
          <span>human <em>side</em></span>
          of the web.
        </h1>
        <p className="hero-description">
          I&apos;m a Web Developer who turns thoughtful ideas into
          accessible, engaging digital experiences. I care about the details
          — and the people on the other side of the screen.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <Arrow />
          </a>
          <a className="text-link" href="#about">A little about me <span>↓</span></a>
        </div>
        <p className="hero-caption"><span>01</span> WEB DEVELOPER · KARACHI, PAKISTAN</p>
      </div>
      <div className="hero-photo" data-reveal="right">
        <img src={mypic} alt="Asim Siddiqui" />
      </div>
      <a className="scroll-cue" href="#work">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
  )
}

export default Hero
